import cx from 'classnames';
import React from 'react';
// import { Spin } from 'antd';
import { IPageBaseProps } from '@/interfaces';
import { HtmlMeta, LazyLoadingSpin, PageWrapper } from '@/components';

import styles from './styles.module.less';

interface IProps extends IPageBaseProps {}

export const TestLazyLoadingSpin: React.FC<IProps> = (props) => {
  return (
    <PageWrapper
      className={cx(
        styles['comp-wrapper'],
        { [styles['comp-wrapper--alwaysDarkMode']]: props.alwaysDarkMode },
        `g-comp--${TestLazyLoadingSpin.displayName}`,
        props.className,
      )}
      style={props.style}
    >
      <HtmlMeta title={props.pageProps?.name} />

      <h2>TestLazyLoadingSpin</h2>

      <LazyLoadingSpin fullscreen />
      <LazyLoadingSpin style={{ color: 'red' }} />
    </PageWrapper>
  );
};
