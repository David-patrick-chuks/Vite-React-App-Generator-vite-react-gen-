const validate = require('validate-npm-package-name');

let result = validate('react-draft');
console.log(result);
result = validate('vite-react-gen');
console.log(result);