// Copyright (C) 2007-2018, GoodData(R) Corporation. All rights reserved.
import { factory as sdkFactory } from '@gooddata/gooddata-js';
import { PROJECT_ID } from './catalog';

// console.log(PROJECT_ID);

const config = {
  domain: ''
};

if (process.env.NODE_ENV === 'production') {
  config.domain = 'https://developer.na.gooddata.com';
}

const sdk = sdkFactory(config);

export default {
  projectId: PROJECT_ID,
  sdk,
  domain: config.domain
};
