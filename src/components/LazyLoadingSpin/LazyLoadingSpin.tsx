import React from 'react';
import cx from 'classnames';
import { Spin } from 'antd';
import { SpinProps } from 'antd/lib/spin';

import styles from './style.module.less';

interface IProps extends SpinProps {
  fullscreen?: boolean;
  delay?: number;
  //
  className?: string;
  style?: React.CSSProperties;
  alwaysDarkMode?: boolean;
}

console.log(Spin);

// <Spin
//   className={cx(
//     styles['comp-wrapper'],
//     {
//       [styles['comp-wrapper--alwaysDarkMode']]: props.alwaysDarkMode,
//       [styles['comp-wrapper--fullscreen']]: !!props.fullscreen,
//     },
//     `g-comp--${LazyLoadingSpin.displayName}`,
//     props.className,
//   )}
//   style={props.style}
//   delay={props.delay}
// />

export const LazyLoadingSpin: React.FC<IProps> = (props) => {
  return (
    <>
      <div
        className={cx(
          styles['comp-wrapper'],
          {
            [styles['comp-wrapper--alwaysDarkMode']]: props.alwaysDarkMode,
            [styles['comp-wrapper--fullscreen']]: !!props.fullscreen,
          },
          `g-comp--${LazyLoadingSpin.displayName}`,
          props.className,
        )}
        style={props.style}
        // delay={props.delay}
      />
    </>
  );
};
