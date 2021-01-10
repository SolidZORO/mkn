import cx from 'classnames';
import React from 'react';
import { FiPercent } from 'react-icons/fi';

import { IPageProps } from '@/interfaces';
import { HtmlMeta, PageContainer, HugeIcon } from '@/components';

import styles from './styles.module.less';

interface IProps extends IPageProps {
  className?: string;
  style?: React.CSSProperties;
  alwaysDarkMode?: boolean;
}

export const About: React.FC<IProps> = (props) => (
  <PageContainer className={cx(styles['comp-wrapper'], props.className)}>
    <HtmlMeta title="About" />

    <HugeIcon icon={<FiPercent />} />
  </PageContainer>
);
