import cx from 'classnames';
import React from 'react';
import { FiTriangle } from 'react-icons/fi';

import { IPageBaseProps } from '@/interfaces';
import { HtmlMeta, HugeIcon, PageWrapper } from '@/components';
import { config } from '@/configs';

import styles from './styles.module.less';

interface IProps extends IPageBaseProps {}

export const Home: React.FC<IProps> = (props) => {
  return (
    <PageWrapper
      className={cx(
        styles['comp-wrapper'],
        { [styles['comp-wrapper--alwaysDarkMode']]: props.alwaysDarkMode },
        `g-comp--${Home.displayName}`,
        props.className,
      )}
      style={props.style}
    >
      <HtmlMeta title={config.pkg.name} disableSiteName />

      <HugeIcon icon={<FiTriangle />} />
    </PageWrapper>
  );
};
