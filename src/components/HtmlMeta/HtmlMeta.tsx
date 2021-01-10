import React from 'react';
import { Helmet } from 'react-helmet-async';

import { envConfig } from '@/configs';

interface IProps {
  title: React.ReactNode;
  disableSiteName?: boolean;
  //
  className?: string;
  style?: React.CSSProperties;
  alwaysDarkMode?: boolean;
}

export const HtmlMeta: React.FC<IProps> = (props) => {
  const siteName = props.disableSiteName
    ? ''
    : ` - ${envConfig.NEXT_PUBLIC_SITE_NAME}`;

  return (
    <Helmet>
      <title>
        {props.title || ''}
        {siteName}
      </title>
    </Helmet>
  );
};
