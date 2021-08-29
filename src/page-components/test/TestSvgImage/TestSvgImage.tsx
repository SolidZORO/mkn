/* eslint-disable max-len */
import cx from 'classnames';
import React from 'react';

import { IPageBaseProps } from '@/interfaces';
import { HtmlMeta, PageWrapper } from '@/components';

import TestSvg from './svgs/test.svg';
import PlaySvg from './svgs/play.svg';

import styles from './styles.module.less';

interface IProps extends IPageBaseProps {}

export const TestSvgImage: React.FC<IProps> = (props) => {
  return (
    <PageWrapper
      className={cx(
        styles['comp-wrapper'],
        { [styles['comp-wrapper--alwaysDarkMode']]: props.alwaysDarkMode },
        `g-comp--${TestSvgImage.displayName}`,
        props.className,
      )}
      style={props.style}
    >
      <HtmlMeta title={props.pageProps?.name} />

      <h2>TestSvg</h2>
      <TestSvg />

      <h2>PlaySvg</h2>
      <PlaySvg />
    </PageWrapper>
  );
};
