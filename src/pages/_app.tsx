import React, { useEffect } from 'react';
import { Spin } from 'antd';
import { HelmetProvider } from 'react-helmet-async';
// import { IconContext } from 'react-icons';

import { ErrorBoundary, LoadingSpinner } from '@/components';
import { MasterLayout } from '@/layouts';
import { DISABLE_SSR_TRANSITION } from '@/pages/_document';
import { isServer } from '@/utils';

// import '@/styles/rcicon.css';

require('@/styles/global.less');

Spin.setDefaultIndicator(<LoadingSpinner />);

export default function CustomApp({ Component, pageProps }: any) {
  useEffect(() => {
    // avoid CSS animation flashing
    if (!isServer()) {
      const disableTransitionDom = document.getElementById(
        DISABLE_SSR_TRANSITION,
      );

      if (disableTransitionDom) disableTransitionDom.remove();
    }
  }, []);

  return (
    <ErrorBoundary>
      <HelmetProvider>
        {/* ⚠️⚠️⚠️ FK! Next.js does not support IconContext.Provider */}
        {/* <IconContext.Provider value={{ className: 'rcicon g-rcicon' }}> */}
        <MasterLayout mainComp={Component} routeProps={pageProps} />
        {/* </IconContext.Provider> */}
      </HelmetProvider>
    </ErrorBoundary>
  );
}
