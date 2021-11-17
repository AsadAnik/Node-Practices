const fs = require('fs');
const chalk = require('chalk');


console.log(chalk.red.inverse('i am notes-----'));

// this debugger for debugging with chrome debugger..
debugger;


// read note by searching one..
const getNotes = function (title) {
    const notes = loadNotes();    
    const findNote = notes.find(note => note.title === title);

    if (!findNote) {
        console.log(chalk.red.inverse('Not found this note!'));
    }else{
        console.log(`${chalk.green.inverse(findNote.title)} : ${findNote.body}`);
    }

    // another debugger breakpoint for chrome debugger..
    debugger;
};


// add note..
const addNote = function (title, body) {
    const notes = loadNotes();

    // let's avoiding the dublicated list item..
    const duplicateNote = notes.filter(function (note) {
        return note.title === title;
    });

    // if list has the previous value so don't add value into list..
    if (duplicateNote.length === 0) {
        notes.push({
            title,
            body
        });
        
        saveNotes(notes);

    } else {
        console.log(chalk.red.inverse('This already used before!!!'));
    }

    console.log(chalk.green.bold('addNote done---'));
};


// save notes after store data..
const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);

    console.log(chalk.green.bold('saveNotes done----'));
};


// load notes function..
const loadNotes = function () {
    console.log(chalk.yellow.bold('loadNotes called-----'));

    try {
        // if file is exists so read the file and return object.
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        const dataObject = JSON.parse(dataJSON);

        console.log(chalk.blue.bold('loadNotes try block 0 done-----'));
        return dataObject;

    } catch (err) {
        // if no file exists so return array to store data into new file.
        console.log(chalk.blue.bold('loadNotes try block 1 done-----'));
        return [];
    }
};


// Function to Remove note..
const removeNote = function(title){
    const notes = loadNotes();

    // filter which one is given user and make it not to show into new list..
    const keepNoteAfterRemove = notes.filter(function(note){
        return note.title !== title;
    });

    // if items removing from list to decrease then make saveNote and console removed..
    if (notes.length > keepNoteAfterRemove.length) {
        console.log(chalk.green.inverse('Removed Note!'));
        saveNotes(keepNoteAfterRemove);

    }else{
        console.log(chalk.red.inverse('Note not found!'));
    }
};

// Function to Listing the note into terminal's view with notes title..
const listNote = () => {
    const notes = loadNotes();
    console.log(chalk.white.inverse('Your notes are'));
    notes.forEach(note => console.log(note.title));
};


module.exports = {
    getNotes,
    addNote,
    removeNote,
    listNote
};