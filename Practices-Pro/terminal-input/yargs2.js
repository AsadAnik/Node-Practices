const yargs = require('yargs');

// Add command [ node yargs2.js add --title='this is title' --body='this is body' ].
yargs.command({
    command: 'add',
    describe: 'Add a new note!',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string' 
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'    
        }
    },
    handler: function(argv) {
        console.log(`Title: ${argv.title}`);
        console.log(`Body: ${argv.body}`);
    }
});

// Remove command [ node yargs2.js remove --title='removed title' --body='removed body' ].
yargs.command({
    command: 'remove',
    describe: 'There is new note to remove!',
    builder: {
        title: {
            describe: 'Removed title',
            demandOption: true,
            type: 'boolean'
        },
        body: {
            describe: 'Removed body',
            demandOption: false,
            type: 'boolean'
        }
    },
    handler: function(argv) {
        console.log(`Title: ${argv.title}`);
        console.log(`Body: ${argv.body}`);
    }
});

// Can be use this..
// console.log(yargs.argv);

// Also can be use this..
yargs.parse();