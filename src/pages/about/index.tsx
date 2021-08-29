// eslint-disable-next-line max-len
export { About as default } from '@/page-components/about/About/About';

export const getStaticProps = async () => {
  return {
    props: {
      layout: 'master',
      name: 'About',
    },
  };
};
