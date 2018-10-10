/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';

/**
 * StreamFilter
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class StreamFilter extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      filter_key: 'filter_key',
      name: 'name',
      type: 'type',
      id: 'id'
    });
  }

  get (fields, params): StreamFilter {
    return this.read(
      fields,
      params
    );
  }
}