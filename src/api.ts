/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 * @format
 */

import CrashReporter from './crash-reporter'
import { FacebookRequestError } from './exceptions'
import Http from './http'

/**
 * Facebook Ads API
 */
export default class FacebookAdsApi {
  _debug: boolean
  _showHeader: boolean
  accessToken: string
  locale: string
  static _defaultApi: FacebookAdsApi
  static get VERSION(): string {
    return 'v13.0'
  }
  static get SDK_VERSION(): string {
    return '13.0.0'
  }
  static get GRAPH(): string {
    return 'https://graph.facebook.com'
  }

  static get GRAPH_VIDEO(): string {
    return 'https://graph-video.facebook.com'
  }

  constructor(
    accessToken: string,
    locale: string = 'en_US',
    crash_log: boolean = true
  ) {
    if (!accessToken) {
      throw new Error('Access token required')
    }
    this.accessToken = accessToken
    this.locale = locale
    this._debug = false
    this._showHeader = false
    if (crash_log) {
      CrashReporter.enable()
    }
  }

  /**
   * Instantiate an API and store it as the default
   */
  static init(
    accessToken: string,
    locale: string = 'en_US',
    crash_log: boolean = true
  ): FacebookAdsApi {
    const api = new this(accessToken, locale, crash_log)
    this.setDefaultApi(api)
    return api
  }

  static setDefaultApi(api: FacebookAdsApi) {
    this._defaultApi = api
  }

  static getDefaultApi(): FacebookAdsApi {
    return this._defaultApi
  }

  getAppID(): Promise<any> {
    let url = [
      FacebookAdsApi.GRAPH,
      FacebookAdsApi.VERSION,
      'debug_token',
    ].join('/')
    let params: { [name: string]: string } = {}
    params['access_token'] = this.accessToken
    params['input_token'] = this.accessToken
    params['fields'] = 'app_id'
    url += `?${FacebookAdsApi._encodeParams(params)}`

    return Http.request('GET', url, {}, {}, false, false)
  }

  setDebug(flag: boolean): FacebookAdsApi {
    this._debug = flag
    return this
  }

  setShowHeader(flag: boolean): FacebookAdsApi {
    this._showHeader = flag
    return this
  }

  /**
   * Http Request
   */
  async call(
    method: string,
    path: string | Array<string> | String,
    params: { [name: string]: string } = {},
    files: Object = {},
    useMultipartFormData: boolean = false,
    urlOverride: string = ''
  ): Promise<any> {
    let url: any
    let data: Object = {}
    if (method === 'POST' || method === 'PUT') {
      data = params
      params = {}
    }
    const domain = urlOverride || FacebookAdsApi.GRAPH
    if (typeof path !== 'string' && !(path instanceof String)) {
      url = [domain, FacebookAdsApi.VERSION, ...path].join('/')
      params['access_token'] = this.accessToken
      url += `?${FacebookAdsApi._encodeParams(params)}`
    } else {
      url = path
    }
    const strUrl: string = url
    try {
      let response = await Http.request(
        method,
        strUrl,
        data,
        files,
        useMultipartFormData,
        this._showHeader
      )
      if (this._showHeader) {
        response.body['headers'] = response.headers
        response = response.body
      }

      if (this._debug) {
        console.log(
          `200 ${method} ${url} ${
            Object.keys(data).length > 0 ? JSON.stringify(data) : ''
          }`
        )
        console.log(`Response: ${response ? JSON.stringify(response) : ''}`)
      }
      return await Promise.resolve(response)
    } catch (response_1) {
      if (this._debug) {
        console.log(
          `${response_1.statusCode} ${method} ${url}
            ${Object.keys(data).length > 0 ? JSON.stringify(data) : ''}`
        )
      }
      throw new FacebookRequestError(response_1, method, url, data)
    }
  }

  static _encodeParams(params: { [name: string]: string }): string {
    return Object.keys(params)
      .map((key) => {
        var param = params[key]
        if (typeof param === 'object') {
          param = param ? JSON.stringify(param) : ''
        }
        return `${encodeURIComponent(key)}=${encodeURIComponent(param)}`
      })
      .join('&')
  }
}
