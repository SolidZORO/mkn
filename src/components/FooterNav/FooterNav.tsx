import React from 'react';
import cx from 'classnames';

import styles from './style.module.less';

interface IProps {
  //
  className?: string;
  style?: React.CSSProperties;
  alwaysDarkMode?: boolean;
}

export const FooterNav: React.FC<IProps> = (props) => (
  <div
    className={cx(
      styles['comp-wrapper'],
      { [styles['comp-wrapper--always-dark-mode']]: props.alwaysDarkMode },
      props.className,
    )}
    style={props.style}
  >
    © {new Date().getFullYear()}
    <a href="https://github.com/SolidZORO/mkn" target="_blank" rel="noreferrer">
      mkn
    </a>{' '}
    by Jason
  </div>
);
