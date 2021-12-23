import cx from 'classnames';
import React from 'react';

import { IPageBaseProps } from '@/interfaces';
import { HtmlMeta, PageWrapper } from '@/components';

import styles from './styles.module.less';

// ❌ is not work
// Please use require
// import './_less.less';

// ✅ is work!!!
// require('./_less.less');

// ❌ is not work
// Please move all global CSS imports to src/pages/_app.tsx.
// Or convert the import to Component-Level CSS (CSS Modules).
// Read more: https://nextjs.org/docs/messages/css-global
// Location: src/page-components/test/Test/Test.tsx
// import './non-module-css.css';

// ❌ is not work
// Same as 👆 above
// require('./_css.css');

interface IProps extends IPageBaseProps {}

export const TestCssImageBg: React.FC<IProps> = (props) => (
  <PageWrapper className={cx(styles['comp-wrapper'], props.className)}>
    <HtmlMeta title={props.pageProps?.name} />

    {/*<div className="image-bg--css">css</div>*/}
    {/*<div className="image-bg--less">less</div>*/}
    <div className={styles['image-bg--less-module']}>less module</div>

    <br />
    <br />

    <div className="test-non-module-less">TEST-NON-MODULE LESS</div>
    <div className="test-non-module-css">TEST-NON-MODULE CSS</div>
  </PageWrapper>
);
