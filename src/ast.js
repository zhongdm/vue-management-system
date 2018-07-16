const esprima = require('esprima');
let code = 'const a = 1';
const ast = esprima.parseScript(code);
console.log(ast);