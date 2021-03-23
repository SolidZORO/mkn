const fs = require('fs');
// const mkdirp = require('mkdirp');

// Avoid too long formatting
const vars = fs.readFileSync('./variables.less', 'utf-8').replace(/,\n/g, ',');

const matchs = vars.match(/^@.*/gm);

// eslint-disable-next-line array-callback-return,consistent-return
const allVars = matchs.map((m) => {
  const mv = m.match(/^@(.*?):.*;/m);
  // eslint-disable-next-line @typescript-eslint/prefer-optional-chain
  if (mv && mv[1]) return mv[1];
});

const HEADER = `@import '/src/styles/variables.less';

:root {
`;

const FOOTER = `}
`;

let CONTENT = '';

allVars.forEach((v) => {
  // --screen-md: @screen-md;
  if (!v) return;

  CONTENT += `  --${v}: @${v};\n`;
});

fs.writeFileSync('variables-css.less', `${HEADER}${CONTENT}${FOOTER}`);
