const yargs = require('yargs');
const Notes = require('./notes');

// command for add..
yargs.command({
    command: 'add',
    description: 'Add a note!',
    builder: {
        title: {
            description: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            description: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
       Notes.addNote(argv.title, argv.body);
    }
});

// command for read..
yargs.command({
    command: 'read',
    description: 'Read the note!',
    builder: {
        title: {
            description: 'Note title',
            demandOption: true,
            type: 'string',
        }
    },
    handler: function (argv) {
        Notes.getNotes(argv.title);
    }
});

// command for remove..
yargs.command({
    command: 'remove',
    description: 'Remove a note!',
    builder: {
        title: {
            description: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        Notes.removeNote(argv.title);
    }
});

// command for view list..
yargs.command({
    command: 'list',
    description: 'List of note!',
    handler: function(){
        Notes.listNote();
    }
});

// run this yargs..
yargs.parse();