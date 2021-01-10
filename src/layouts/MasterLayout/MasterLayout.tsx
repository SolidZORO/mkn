import cx from 'classnames';
import React from 'react';
import { HeaderNavbar, FooterNav } from '@/components';

import styles from './styles.module.less';

export interface IProps {
  children: React.ReactNode;
  //
  disableHeader?: boolean;
  disableFooter?: boolean;
  //
  className?: string;
  style?: React.CSSProperties;
  alwaysDarkMode?: boolean;
}

export const MasterLayout: React.FC<IProps> = (props) => (
  <div
    id="g-layout-wrapper--master"
    className={cx(
      styles['layout-wrapper'],
      { [styles['layout-wrapper--always-dark-mode']]: props.alwaysDarkMode },
      props.className,
      'g-layout-wrapper--master',
    )}
    style={props.style}
  >
    {props.disableHeader ? null : (
      <div className={cx(styles['layout-header'], 'g-layout-header--master')}>
        <HeaderNavbar />
      </div>
    )}

    <div
      className={cx(styles['layout-container'], 'g-layout-container--master')}
    >
      {props.children}
    </div>

    {props.disableFooter ? null : (
      <div className={cx(styles['layout-footer'], 'g-layout-footer--master')}>
        <FooterNav />
      </div>
    )}
  </div>
);
