const chalk = require('chalk');
const { default: validator } = require('validator');

// console.log(chalk.blue.underline.inverse('Hello Programmers'));
// console.log(chalk.green.underline.inverse('Success'));
// console.log(chalk.red.underline.inverse('Failure'));

const res = validator.isEmail('karki@gmail.com');
!res
  ? console.log(chalk.red.inverse(res))
  : console.log(chalk.bgGreen(res));
