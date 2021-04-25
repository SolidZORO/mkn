import React, { useEffect } from 'react';
import { Spin } from 'antd';
import { CgSpinner as Spiner } from 'react-icons/cg';
import { HelmetProvider } from 'react-helmet-async';

import { ErrorBoundary } from '@/components';
import { MasterLayout } from '@/layouts';
import { DISABLE_SSR_TRANSITION } from '@/pages/_document';
import { isServer } from '@/utils';

// import '@/styles/global.less';
require('@/styles/global.less');

Spin.setDefaultIndicator(
  <Spiner className="icon-spin" style={{ fontSize: '200%' }} />,
);

export default function CustomApp({ Component, pageProps }: any) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  const componentDom = <Component {...pageProps} />;
  const layoutDom = <MasterLayout>{componentDom}</MasterLayout>;

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
      <div id="root">
        <HelmetProvider>{layoutDom}</HelmetProvider>
      </div>
    </ErrorBoundary>
  );
}
