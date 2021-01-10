import { useEffect } from 'react';

import { CSS_THEME_DARK } from '@/constants';

export const useDarkMode: () => void = () => {
  useEffect(() => {
    const htmlEl = document?.documentElement;

    if (CSS_THEME_DARK && htmlEl) {
      htmlEl.classList.add(CSS_THEME_DARK);
    }

    // eslint-disable-next-line consistent-return
    return () => {
      htmlEl.classList.remove(CSS_THEME_DARK);
    };
  }, []);
};
