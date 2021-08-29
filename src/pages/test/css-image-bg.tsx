// eslint-disable-next-line max-len
export { TestCssImageBg as default } from '@/page-components/test/TestCssImageBg/TestCssImageBg';

export const getStaticProps = async () => {
  return {
    props: {
      layout: 'test',
      name: 'TestCssImageBg',
    },
  };
};
