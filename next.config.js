/* eslint-disable */
const withAntdLess = require('next-plugin-antd-less');

module.exports = withAntdLess({
  // modifyVars: {
  //   '@THEME--DARK': 'theme-dark',
  // },
  lessVarsFilePath: './src/styles/variables.less',
  // cssLoaderOptions: {
  //   esModule: false,
  //   sourceMap: false,
  //   modules: {
  //     mode: 'local',
  //   },
  // },

  // Other NextConfig Here...
  webpack(config) {
    return config;
  },

  // NextFuture
  // future: {
  //   webpack5: true,
  // },
});
