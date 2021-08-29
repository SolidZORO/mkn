// eslint-disable-next-line max-len
export { TestLazyLoadingSpin as default } from '@/page-components/test/TestLazyLoadingSpin/TestLazyLoadingSpin';

export const getStaticProps = async () => {
  return {
    props: {
      layout: 'test',
      name: 'TestLazyLoadingSpin',
    },
  };
};
