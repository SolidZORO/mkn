// eslint-disable-next-line max-len
// eslint-disable-next-line max-len
export { AboutName as default } from '@/page-components/about/AboutName/AboutName';

export const getStaticProps = async () => {
  return {
    props: {
      layout: 'master',
      name: 'AboutName',
    },
  };
};

export async function getStaticPaths(ctx: any) {
  return {
    paths: [],
    fallback: true,
  };
}
