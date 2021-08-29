import React from 'react';
import { Router } from 'next/router';

export type ILayout = 'master' | 'test';

export interface ICompBaseProps {
  className?: string;
  style?: React.CSSProperties;
  alwaysDarkMode?: boolean;
}

export interface IPageBaseProps extends ICompBaseProps {
  routeProps: Router;
  pageProps?: {
    layout: ILayout;
    name?: string;
  };
}

export interface ILayoutBaseProps {
  mainComp: any;
  routeProps: Router;
  pageProps?: any;
}

export interface IGetStaticPropsCtx {}
