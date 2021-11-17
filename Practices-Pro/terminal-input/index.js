// Chalk to navigate the terminal results with Color..
const chalk = require('chalk');

/**
 * When type on terminal [ node index.js 'Hello Terminal World!' ]
 * this gonna show in process.argv[2] index as well.
 * Also when used [ npm run start 'Hi all' ]
 * this also makes same results working..
 * **/

const inputFromTerminal = process.argv[2];

console.log(inputFromTerminal);

if (inputFromTerminal === 'add'){
    console.log(chalk.inverse.green('Added Note!'));

}else if (inputFromTerminal === 'remove'){
    console.log(chalk.inverse.red('Removed Note!'));

}else{
    console.log(chalk.inverse.yellow('Customized own!'));
}