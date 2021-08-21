import cx from 'classnames';
import React from 'react';

import { IPageBaseProps } from '@/interfaces';
import { HtmlMeta, PageWrapper } from '@/components';
import { TestLayout } from '@/layouts';

import styles from './styles.module.less';
import stylesTest from './styles-test.module.css';

// ❌ is not work
// Please use require
// import './non-module-less.less';

// ✅ is work!!!
require('./non-module-less.less');

// ❌ is not work
// Please move all global CSS imports to src/pages/_app.tsx.
// Or convert the import to Component-Level CSS (CSS Modules).
// Read more: https://nextjs.org/docs/messages/css-global
// Location: src/page-components/test/Test/Test.tsx
// import './non-module-css.css';

// ❌ is not work
// Same as 👆 above
// require('./non-module-css.css');

interface IProps extends IPageBaseProps {}

export const TestCssImageBg: React.FC<IProps> = (props) => (
  <PageWrapper className={cx(styles['comp-wrapper'], props.className)}>
    <HtmlMeta title="Test" />

    <div className={cx(styles['image-bg'], stylesTest['g-mod--image-bg'])}>
      IMAGE-BG
    </div>

    <br />
    <br />

    <div className="test-non-module-less">TEST-NON-MODULE LESS</div>
    <div className="test-non-module-css">TEST-NON-MODULE CSS</div>
  </PageWrapper>
);

// @ts-ignore
TestCssImageBg.getLayout = <TestLayout mainComp={TestCssImageBg} />;
