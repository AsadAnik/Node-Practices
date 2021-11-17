const chalk = require('chalk');
const yargs = require('yargs');

// version..
yargs.version('x.x.x.fakeVersion');

// for add command..
yargs.command({
    command: 'add',
    describe: 'Added a new note.',
    handler: function(){
        console.log(chalk.inverse.green('Adding new command note!'));
    }
});

// for remove command..
yargs.command({
    command: 'remove',
    describe: 'Removed a note from recent.',
    handler: function(){
        console.log(chalk.inverse.red('Removed new command recently!'));
    }
});

// for list command..
yargs.command({
    command: 'list',
    describe: 'Listed the note here.',
    handler: function(){
        console.log(chalk.inverse.yellow('Listed successfully!'));
    }
});

// for read command..
yargs.command({
    command: 'read',
    describe: 'Read the note now.',
    handler: function(){
        console.log(chalk.inverse.white('Read successfully!'));
    }
});

console.log(yargs.argv);