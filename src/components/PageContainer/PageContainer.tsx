import cx from 'classnames';
import React from 'react';

import styles from './styles.module.less';

interface IProps {
  children: React.ReactNode;
  //
  className?: string;
  style?: React.CSSProperties;
  alwaysDarkMode?: boolean;
}

export const PageContainer: React.FC<IProps> = (props) => (
  <div
    className={cx(
      styles['comp-wrapper'],
      { [styles['comp-wrapper--always-dark-mode']]: props.alwaysDarkMode },
      props.className,
    )}
    style={props.style}
  >
    {props.children}
  </div>
);
