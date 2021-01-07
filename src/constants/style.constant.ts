/* eslint-disable max-len, no-underscore-dangle, @typescript-eslint/naming-convention */
import { isServer } from '@/utils';

const __CSS_THEME_DARK__ = 'theme-dark';

// setting theme
export const CSS_THEME_DARK = isServer()
  ? __CSS_THEME_DARK__
  : getComputedStyle(document.documentElement)
      ?.getPropertyValue('--THEME--DARK')
      .trim() || __CSS_THEME_DARK__;
