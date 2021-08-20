import cx from 'classnames';
import React from 'react';

import { ICompBaseProps } from '@/interfaces';

import styles from './styles.module.less';

interface IProps extends ICompBaseProps {
  children: React.ReactNode;
}

export const PageWrapper: React.FC<IProps> = (props) => {
  return (
    <div
      className={cx(
        styles['comp-wrapper'],
        { [styles['comp-wrapper--alwaysDarkMode']]: props.alwaysDarkMode },
        `g-comp--${PageWrapper.displayName}`,
        props.className,
      )}
      style={props.style}
    >
      {props.children}
    </div>
  );
};
