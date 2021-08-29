// eslint-disable-next-line max-len
export { Home as default } from '@/page-components/home/Home/Home';

export const getStaticProps = async () => {
  return {
    props: {
      layout: 'master',
      name: '',
    },
  };
};
