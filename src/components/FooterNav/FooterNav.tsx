import React from 'react';
import cx from 'classnames';

import { pkgConfig, envConfig } from '@/configs';

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
    <a
      href={`https://github.com/SolidZORO/${pkgConfig.name}`}
      target="_blank"
      rel="noreferrer"
    >
      {envConfig.NEXT_PUBLIC_SITE_NAME}
    </a>{' '}
    by {pkgConfig.author.split(' ')[0]}
  </div>
);
