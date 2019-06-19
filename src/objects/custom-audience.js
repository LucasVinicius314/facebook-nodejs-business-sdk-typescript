/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';
import AdAccount from './ad-account';
import Ad from './ad';
import CustomAudiencePrefillState from './custom-audience-prefill-state';
import CustomAudienceSession from './custom-audience-session';
import CustomAudiencesharedAccountInfo from './custom-audienceshared-account-info';

/**
 * CustomAudience
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CustomAudience extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      account_id: 'account_id',
      approximate_count: 'approximate_count',
      customer_file_source: 'customer_file_source',
      data_source: 'data_source',
      data_source_types: 'data_source_types',
      datafile_custom_audience_uploading_status: 'datafile_custom_audience_uploading_status',
      delivery_status: 'delivery_status',
      description: 'description',
      excluded_custom_audiences: 'excluded_custom_audiences',
      external_event_source: 'external_event_source',
      household_audience: 'household_audience',
      id: 'id',
      included_custom_audiences: 'included_custom_audiences',
      is_household: 'is_household',
      is_snapshot: 'is_snapshot',
      is_value_based: 'is_value_based',
      lookalike_audience_ids: 'lookalike_audience_ids',
      lookalike_spec: 'lookalike_spec',
      name: 'name',
      operation_status: 'operation_status',
      opt_out_link: 'opt_out_link',
      permission_for_actions: 'permission_for_actions',
      pixel_id: 'pixel_id',
      regulated_audience_spec: 'regulated_audience_spec',
      retention_days: 'retention_days',
      rev_share_policy_id: 'rev_share_policy_id',
      rule: 'rule',
      rule_aggregation: 'rule_aggregation',
      rule_v2: 'rule_v2',
      seed_audience: 'seed_audience',
      sharing_status: 'sharing_status',
      subtype: 'subtype',
      time_content_updated: 'time_content_updated',
      time_created: 'time_created',
      time_updated: 'time_updated',
    });
  }

  static get ClaimObjective (): Object {
    return Object.freeze({
      automotive_model: 'AUTOMOTIVE_MODEL',
      collaborative_ads: 'COLLABORATIVE_ADS',
      home_listing: 'HOME_LISTING',
      media_title: 'MEDIA_TITLE',
      product: 'PRODUCT',
      travel: 'TRAVEL',
      vehicle: 'VEHICLE',
      vehicle_offer: 'VEHICLE_OFFER',
    });
  }
  static get ContentType (): Object {
    return Object.freeze({
      automotive_model: 'AUTOMOTIVE_MODEL',
      destination: 'DESTINATION',
      flight: 'FLIGHT',
      home_listing: 'HOME_LISTING',
      hotel: 'HOTEL',
      media_title: 'MEDIA_TITLE',
      product: 'PRODUCT',
      vehicle: 'VEHICLE',
      vehicle_offer: 'VEHICLE_OFFER',
    });
  }
  static get CustomerFileSource (): Object {
    return Object.freeze({
      both_user_and_partner_provided: 'BOTH_USER_AND_PARTNER_PROVIDED',
      partner_provided_only: 'PARTNER_PROVIDED_ONLY',
      user_provided_only: 'USER_PROVIDED_ONLY',
    });
  }
  static get Subtype (): Object {
    return Object.freeze({
      app: 'APP',
      bag_of_accounts: 'BAG_OF_ACCOUNTS',
      claim: 'CLAIM',
      custom: 'CUSTOM',
      engagement: 'ENGAGEMENT',
      fox: 'FOX',
      lookalike: 'LOOKALIKE',
      managed: 'MANAGED',
      measurement: 'MEASUREMENT',
      offline_conversion: 'OFFLINE_CONVERSION',
      partner: 'PARTNER',
      regulated_categories_audience: 'REGULATED_CATEGORIES_AUDIENCE',
      study_rule_audience: 'STUDY_RULE_AUDIENCE',
      video: 'VIDEO',
      website: 'WEBSITE',
    });
  }

  deleteAdAccounts (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/adaccounts',
      params
    );
  }

  getAdAccounts (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdAccount,
      fields,
      params,
      fetchFirstPage,
      '/adaccounts'
    );
  }

  createAdAccount (fields: Array<string>, params: Object = {}): Promise<CustomAudience> {
    return this.createEdge(
      '/adaccounts',
      fields,
      params,
      CustomAudience
    );
  }

  getAds (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Ad,
      fields,
      params,
      fetchFirstPage,
      '/ads'
    );
  }

  createCapability (fields: Array<string>, params: Object = {}): Promise<AbstractObject> {
    return this.createEdge(
      '/capabilities',
      fields,
      params,
      
    );
  }

  createDatum (fields: Array<string>, params: Object = {}): Promise<AbstractObject> {
    return this.createEdge(
      '/data',
      fields,
      params,
      
    );
  }

  getPrefills (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      CustomAudiencePrefillState,
      fields,
      params,
      fetchFirstPage,
      '/prefills'
    );
  }

  getSessions (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      CustomAudienceSession,
      fields,
      params,
      fetchFirstPage,
      '/sessions'
    );
  }

  getSharedAccountInfo (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      CustomAudiencesharedAccountInfo,
      fields,
      params,
      fetchFirstPage,
      '/shared_account_info'
    );
  }

  deleteUpload (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/upload',
      params
    );
  }

  createUpload (fields: Array<string>, params: Object = {}): Promise<CustomAudience> {
    return this.createEdge(
      '/upload',
      fields,
      params,
      CustomAudience
    );
  }

  deleteUsers (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/users',
      params
    );
  }

  createUser (fields: Array<string>, params: Object = {}): Promise<CustomAudience> {
    return this.createEdge(
      '/users',
      fields,
      params,
      CustomAudience
    );
  }

  // $FlowFixMe : Support Generic Types
  delete (fields: Array<string>, params: Object = {}): AbstractObject {
    // $FlowFixMe : Support Generic Types
    return super.delete(
      params
    );
  }

  
  get (fields: Array<string>, params: Object = {}): CustomAudience {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }

  // $FlowFixMe : Support Generic Types
  update (fields: Array<string>, params: Object = {}): CustomAudience {
    // $FlowFixMe : Support Generic Types
    return super.update(
      params
    );
  }
}
