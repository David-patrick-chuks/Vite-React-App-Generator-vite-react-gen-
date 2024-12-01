const validate = require('validate-npm-package-name');

let result = validate('react-draft');
console.log(result);
result = validate('react-vite-gen');
console.log(result);