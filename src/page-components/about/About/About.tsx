import cx from 'classnames';
import React from 'react';
import { FiPercent } from 'react-icons/fi';

import { IPageBaseProps } from '@/interfaces';
import { HtmlMeta, HugeIcon, PageWrapper } from '@/components';

import styles from './styles.module.less';

interface IProps extends IPageBaseProps {}

export const About: React.FC<IProps> = (props) => {
  return (
    <PageWrapper
      className={cx(
        styles['comp-wrapper'],
        { [styles['comp-wrapper--alwaysDarkMode']]: props.alwaysDarkMode },
        `g-comp--${About.displayName}`,
        props.className,
      )}
      style={props.style}
    >
      <HtmlMeta title={props.pageProps?.name} />

      <HugeIcon icon={<FiPercent />} />
    </PageWrapper>
  );
};
