import React, { useEffect } from 'react';
import { Spin } from 'antd';
import { HelmetProvider } from 'react-helmet-async';
import { Router } from 'next/router';
// import { IconContext } from 'react-icons';

import { ErrorBoundary, LoadingSpinner } from '@/components';
import { MasterLayout, TestLayout } from '@/layouts';
import { DISABLE_SSR_TRANSITION } from '@/pages/_document';
import { isServer } from '@/utils';
import { ILayout } from '@/interfaces/jsx.interface';

require('@/styles/global.less');

export interface ICustomApp {
  Component: React.FC & {
    getLayout: any;
  };
  pageProps: {
    layout?: ILayout;
    name?: string;
  };
  routeProps: Router;
  err?: Error;
}

Spin.setDefaultIndicator(<LoadingSpinner />);

export default function CustomApp(props: ICustomApp) {
  const avoidCssAnimationFlashing = () => {
    if (!isServer()) {
      const disableTransitionDom = document.getElementById(
        DISABLE_SSR_TRANSITION,
      );

      if (disableTransitionDom) disableTransitionDom.remove();
    }
  };

  useEffect(() => {
    avoidCssAnimationFlashing();
  }, []);

  let layoutDom = null;

  if (props.pageProps?.layout === 'master') {
    layoutDom = (
      <MasterLayout
        mainComp={props.Component}
        routeProps={props.routeProps}
        pageProps={props.pageProps}
      />
    );
  }

  if (props.pageProps?.layout === 'test') {
    layoutDom = (
      <TestLayout
        mainComp={props.Component}
        routeProps={props.routeProps}
        pageProps={props.pageProps}
      />
    );
  }

  return (
    <ErrorBoundary>
      <HelmetProvider>
        {/* ⚠️⚠️⚠️ FK! Next.js does not support IconContext.Provider */}
        {/* <IconContext.Provider value={{ className: 'rcicon g-rcicon' }}> */}
        {layoutDom || <span />}
        {/* </IconContext.Provider> */}
      </HelmetProvider>
    </ErrorBoundary>
  );
}
