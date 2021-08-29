import React from 'react';
import { Router } from 'next/router';

export type ILayout = 'master' | 'test';

export interface IPageBaseProps {
  layout?: ILayout;
  router: Router & {
    name?: string;
  };
  pageProps?: {
    layout: ILayout;
    name?: string;
  };
  //
  className?: string;
  style?: React.CSSProperties;
  alwaysDarkMode?: boolean;
}

export interface ICompBaseProps {
  className?: string;
  style?: React.CSSProperties;
  alwaysDarkMode?: boolean;
}

export interface ILayoutBaseProps {
  mainComp: any;
  router: Router & {
    name?: string;
  };
  pageProps?: any;
}

export interface IGetStaticPropsCtx {}
