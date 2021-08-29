import cx from 'classnames';
import React from 'react';
import Link from 'next/link';

import { IPageBaseProps } from '@/interfaces';
import { HtmlMeta, PageWrapper } from '@/components';

import styles from './styles.module.less';

interface IProps extends IPageBaseProps {}

export const Test: React.FC<IProps> = (props) => (
  <PageWrapper
    className={cx(
      styles['comp-wrapper'],
      { [styles['comp-wrapper--alwaysDarkMode']]: props.alwaysDarkMode },
      `g-comp--${Test.displayName}`,
      props.className,
    )}
    style={props.style}
  >
    <HtmlMeta title={props.pageProps?.name} />

    <Link href="/test/css-image-bg">
      <a>TestCssImageBg</a>
    </Link>

    <Link href="/test/lazy-loading-spin">
      <a>TestLazyLoadingSpin</a>
    </Link>

    <Link href="/test/svg-image">
      <a>TestSvgImage</a>
    </Link>
  </PageWrapper>
);
