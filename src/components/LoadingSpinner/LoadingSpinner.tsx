import React from 'react';
import cx from 'classnames';
import { Spin } from 'antd';
import { SpinProps, SpinSize } from 'antd/lib/spin';

import { ICompBaseProps } from '@/interfaces';

// import { CgSpinner as Spinner } from 'react-icons/cg';
import { ReactComponent as Spinner } from './_spinner.svg';

import styles from './styles.module.less';

interface IProps extends ICompBaseProps, SpinProps {
  fullscreen?: boolean;
  spinning?: boolean;
  size?: SpinSize;
  tip?: string;
  delay?: number;
  lazy?: boolean;
  //
  iconClassName?: string;
}

export const LoadingSpinner: React.FC<IProps> = (props) => {
  LoadingSpinner.displayName = 'LoadingSpinner';

  const iconSize = props.size || 'default';

  return (
    <div
      className={cx(
        styles['comp-wrapper'],
        {
          [styles['comp-wrapper--alwaysDarkMode']]: props.alwaysDarkMode,
          [styles['comp-wrapper--fullscreen']]: !!props.fullscreen,
          [styles['comp-wrapper--lazy']]: !!props.lazy,
        },
        props.className,
        `g-comp--${LoadingSpinner.displayName}`,
      )}
      style={props.style}
    >
      <Spin
        size={iconSize}
        delay={props.delay}
        className={cx(
          styles['spin'],
          styles[`spin-size--${iconSize}`],
          props.iconClassName,
        )}
        indicator={<Spinner className={cx('g-icon-spin')} />}
      />
    </div>
  );
};
