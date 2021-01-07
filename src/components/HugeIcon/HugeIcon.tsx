import React from 'react';
import cx from 'classnames';

import styles from './style.module.less';

interface IProps {
  icon: any;
  //
  className?: string;
  style?: React.CSSProperties;
  alwaysDarkMode?: boolean;
}

export default function HugeIcon(props: IProps) {
  return (
    <div
      className={cx(
        styles['comp-wrapper'],
        { [styles['comp-wrapper--always-dark-mode']]: props.alwaysDarkMode },
        props.className,
      )}
      style={props.style}
    >
      {props.icon}
    </div>
  );
}
