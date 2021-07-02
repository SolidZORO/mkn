import React from 'react';
import { Helmet } from 'react-helmet-async';

import { config } from '@/configs';
import { ICompBaseProps } from '@/interfaces';

interface IProps extends ICompBaseProps {
  title: React.ReactNode;
  disableSiteName?: boolean;
}

export const HtmlMeta: React.FC<IProps> = (props) => {
  const siteName = props.disableSiteName ? '' : ` - ${config.app.NAME}`;

  return (
    <Helmet>
      <title>
        {props.title || ''}
        {siteName}
      </title>
    </Helmet>
  );
};
