import React from 'react';
import { Helmet } from 'react-helmet-async';

interface IProps {
  title: React.ReactNode;
  disableSiteName?: boolean;
  //
  className?: string;
  style?: React.CSSProperties;
  alwaysDarkMode?: boolean;
}

export default function HtmlMeta(props: IProps) {
  const siteName = props.disableSiteName ? '' : ` - mkn`;

  return (
    <Helmet>
      <title>
        {props.title || ''}
        {siteName}
      </title>
    </Helmet>
  );
}
