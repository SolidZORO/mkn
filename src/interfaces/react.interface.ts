import React from 'react';
import { IRouteProps } from '@/interfaces';

export interface IPageBaseProps {
  routeProps?: IRouteProps;
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
