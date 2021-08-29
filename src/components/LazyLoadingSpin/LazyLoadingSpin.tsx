import React from 'react';
import cx from 'classnames';
import { SpinProps } from 'antd/lib/spin';
// import { Spin } from 'antd';
import styles from './style.module.less';

interface IProps extends SpinProps {
  fullscreen?: boolean;
  delay?: number;
  //
  className?: string;
  style?: React.CSSProperties;
  alwaysDarkMode?: boolean;
}

export const LazyLoadingSpin: React.FC<IProps> = (props) => {
  // const dom = (
  //   <Spin
  //     className={cx(
  //       styles['comp-wrapper'],
  //       {
  //         [styles['comp-wrapper--alwaysDarkMode']]: props.alwaysDarkMode,
  //         [styles['comp-wrapper--fullscreen']]: !!props.fullscreen,
  //       },
  //       `g-comp--${LazyLoadingSpin.displayName}`,
  //       props.className,
  //     )}
  //     style={props.style}
  //     delay={props.delay}
  //   />
  // );

  const dom = (
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
  );

  return dom;
};
