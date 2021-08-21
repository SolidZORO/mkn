import cx from 'classnames';
import React from 'react';
import Link from 'next/link';

import { IRouteProps } from '@/interfaces';

import styles from './styles.module.less';

export interface IProps {
  mainComp: any;
  routeProps?: IRouteProps;
  disableNav?: boolean;
}

export const TestLayout: React.FC<IProps> = (props) => (
  <div
    id={`g-layout--${TestLayout?.displayName}`}
    className={cx(styles['comp-wrapper'], `g-comp--${TestLayout?.displayName}`)}
  >
    <div
      className={cx(styles['layout-container'], 'g-layout-container--blank')}
    >
      {props.disableNav ? null : (
        <div className={styles['nav']}>
          <Link href="/test">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>Back</a>
          </Link>
        </div>
      )}

      <props.mainComp routeProps={props?.routeProps} />
    </div>
  </div>
);
