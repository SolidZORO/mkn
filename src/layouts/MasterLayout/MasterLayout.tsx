import cx from 'classnames';
import React from 'react';
import { FooterNav, HeaderNavbar } from '@/components';
import { ILayoutBaseProps } from '@/interfaces/jsx.interface';

import styles from './styles.module.less';

export interface IProps extends ILayoutBaseProps {
  disableHeader?: boolean;
  disableFooter?: boolean;
}

export const MasterLayout: React.FC<IProps> = (props) => {
  return (
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
        <props.mainComp router={props.routeProps} pageProps={props.pageProps} />
      </div>

      {props?.disableFooter ? null : (
        <div className={cx(styles['layout-footer'], 'g-layout-footer--master')}>
          <FooterNav />
        </div>
      )}
    </div>
  );
};
