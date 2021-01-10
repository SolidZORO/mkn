import cx from 'classnames';
import React from 'react';
import { FiTriangle } from 'react-icons/fi';

import { IPageProps } from '@/interfaces';
import { HtmlMeta, PageContainer, HugeIcon } from '@/components';

import styles from './styles.module.less';

interface IProps extends IPageProps {
  className?: string;
  style?: React.CSSProperties;
  alwaysDarkMode?: boolean;
}

export const Home: React.FC<IProps> = (props) => (
  <PageContainer className={cx(styles['comp-wrapper'], props.className)}>
    <HtmlMeta title="Home" />

    <HugeIcon icon={<FiTriangle />} />
  </PageContainer>
);
