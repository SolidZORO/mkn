import cx from 'classnames';
import React from 'react';

import { IPageBaseProps } from '@/interfaces';
import { HtmlMeta, PageContainer } from '@/components';

import styles from './styles.module.less';

interface IProps extends IPageBaseProps {}

export const Error404: React.FC<IProps> = (props) => {
  return (
    <PageContainer
      className={cx(
        styles['comp-wrapper'],
        { [styles['comp-wrapper--alwaysDarkMode']]: props.alwaysDarkMode },
        `g-comp--${Error404.displayName}`,
        props.className,
      )}
      style={props.style}
    >
      <HtmlMeta title="Error 404" />

      <h2>Error 404</h2>
    </PageContainer>
  );
};
