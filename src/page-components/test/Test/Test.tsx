import cx from 'classnames';
import React from 'react';

import { IPageProps } from '@/interfaces';
import { HtmlMeta, PageContainer } from '@/components';

import styles from './styles.module.less';

interface IProps extends IPageProps {
  className?: string;
  style?: React.CSSProperties;
  alwaysDarkMode?: boolean;
}

export const Test: React.FC<IProps> = (props) => (
  <PageContainer className={cx(styles['comp-wrapper'], props.className)}>
    <HtmlMeta title="Test" />

    <div className={styles['image-bg']}>IMAGE-BG</div>
  </PageContainer>
);
