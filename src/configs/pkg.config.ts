import p from '../../package.json';

export const pkg = {
  name: p.name,
  version: p.version,
  author: p.author,
  dependencies: {
    react: p.dependencies.react,
    antd: p.dependencies.antd,
    next: p.dependencies.next,
  },
  // devDependencies: {
  //   '@craco/craco': p.devDependencies['@craco/craco'],
  // },
};
