import cx from 'classnames';
import React from 'react';
import { Spin } from 'antd';

import { IPageBaseProps } from '@/interfaces';
import { HtmlMeta, LazyLoadingSpin, PageWrapper } from '@/components';
import { TestLayout } from '@/layouts';

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
      <HtmlMeta title={props.routeProps?.name} />

      <p>123</p>

      {/* <LazyLoadingSpin fullscreen /> */}
      {/* <LazyLoadingSpin style={{ color: 'red' }} /> */}
    </PageWrapper>
  );
};

// @ts-ignore
TestLazyLoadingSpin.getLayout = <TestLayout mainComp={TestLazyLoadingSpin} />;
