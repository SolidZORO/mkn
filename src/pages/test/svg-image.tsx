// eslint-disable-next-line max-len
export { TestSvgImage as default } from '@/page-components/test/TestSvgImage/TestSvgImage';

export const getStaticProps = async () => {
  return {
    props: {
      layout: 'test',
      name: 'TestSvgImage',
    },
  };
};
