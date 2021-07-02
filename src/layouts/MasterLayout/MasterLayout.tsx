import cx from 'classnames';
import React from 'react';

import { IRouteProps } from '@/interfaces';
import { FooterNav, HeaderNavbar } from '@/components';

import styles from './styles.module.less';

export interface IProps {
  mainComp: any;
  routeProps?: IRouteProps;
  //
  disableHeader?: boolean;
  disableFooter?: boolean;
}

export const MasterLayout: React.FC<IProps> = (props) => (
  <div
    id={`g-layout--${MasterLayout?.displayName}`}
    className={cx(
      styles['comp-wrapper'],
      `g-comp--${MasterLayout?.displayName}`,
    )}
  >
    {props?.disableHeader ? null : (
      <div className={cx(styles['layout-header'], 'g-layout-header--master')}>
        <HeaderNavbar />
      </div>
    )}

    <div
      className={cx(styles['layout-container'], 'g-layout-container--master')}
    >
      <props.mainComp routeProps={props?.routeProps} />
    </div>

    {props?.disableFooter ? null : (
      <div className={cx(styles['layout-footer'], 'g-layout-footer--master')}>
        <FooterNav />
      </div>
    )}
  </div>
);
