import { app } from './app.config';
import { pkg } from './pkg.config';

export const config = {
  app,
  pkg,
};

// @ts-ignore
// window.__APP_CONFIG__ = config;

export * from './env';
