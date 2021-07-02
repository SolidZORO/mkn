/* eslint-disable max-len */

import { __env__ } from './env';

export const app = {
  __DEV__: process.env.NODE_ENV !== 'production',
  //
  NAME: __env__.NEXT_PUBLIC_APP_NAME,
};
