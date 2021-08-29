import cx from 'classnames';
import React from 'react';
import Link from 'next/link';
import { FooterNav } from '@/components';
import { ILayoutBaseProps } from '@/interfaces/jsx.interface';

import styles from './styles.module.less';

export interface IProps extends ILayoutBaseProps {
  disableNav?: boolean;
}

export const TestLayout: React.FC<IProps> = (props) => (
  <div
    id={`g-layout--${TestLayout?.displayName}`}
    className={cx(styles['comp-wrapper'], `g-comp--${TestLayout?.displayName}`)}
  >
    <div className={cx(styles['layout-container'], 'g-layout-container--test')}>
      {props.disableNav ? null : (
        <div className={styles['nav']}>
          <Link href="/test">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>Back</a>
          </Link>
        </div>
      )}

      <props.mainComp router={props.routeProps} pageProps={props.pageProps} />

      <div className={cx(styles['layout-footer'], 'g-layout-footer--test')}>
        <FooterNav />
      </div>
    </div>
  </div>
);
