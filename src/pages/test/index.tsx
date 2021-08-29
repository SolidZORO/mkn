// eslint-disable-next-line max-len
export { Test as default } from '@/page-components/test/Test/Test';

export const getStaticProps = async () => {
  return {
    props: {
      layout: 'test',
      name: 'Test',
    },
  };
};
