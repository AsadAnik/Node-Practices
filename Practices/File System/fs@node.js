///The File_System of NodeJS...
const fs = require('fs');

//Appended File...
///This can add the new one with previews one..
fs.appendFile('fsFile.txt', 'hi', (error) => {
    if(error) throw console.log('Not able to Appends File!');
    console.log('File Appended Successfully!');
});

///This makes new always data every-single run..
fs.writeFile('untitled.txt', 'asd', (error) => {
    if(error) throw console.log("Can't Create File!");

    console.log("File Created & Wrote successfully!");
})