const tasks = (arr) => arr.join(' && ');

module.exports = {
  hooks: {
    'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
    'pre-commit': tasks([
      // https://github.com/azz/pretty-quick
      'pretty-quick --staged',
      // https://github.com/okonet/lint-staged#configuration.
      'lint-staged',
    ]),
  },
};
