// Validator for validate the things that input for..
const validator = require('validator');

// Chalk to navigate the terminal results with Color..
const chalk = require('chalk');

const checkEmail = validator.isEmail('engr.asadanik@gmail.com');
const checkURL = validator.isURL('https:google.com');

console.log(checkEmail ? chalk.green.bold.inverse(checkEmail) : chalk.red.bold.inverse(checkURL));
console.log(checkURL ? chalk.green.bold(checkURL) : chalk.red.bold(checkURL));
