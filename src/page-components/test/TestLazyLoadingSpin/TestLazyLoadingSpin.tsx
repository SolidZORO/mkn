import cx from 'classnames';
import React from 'react';

import { IPageBaseProps } from '@/interfaces';
import { HtmlMeta, LazyLoadingSpin, PageContainer } from '@/components';

import styles from './styles.module.less';

interface IProps extends IPageBaseProps {}

export const TestLazyLoadingSpin: React.FC<IProps> = (props) => {
  return (
    <PageContainer
      className={cx(
        styles['comp-wrapper'],
        { [styles['comp-wrapper--alwaysDarkMode']]: props.alwaysDarkMode },
        `g-comp--${TestLazyLoadingSpin.displayName}`,
        props.className,
      )}
      style={props.style}
    >
      <HtmlMeta title={props.routeProps?.name} />

      <LazyLoadingSpin fullscreen />
      <LazyLoadingSpin style={{ color: 'red' }} />
    </PageContainer>
  );
};
