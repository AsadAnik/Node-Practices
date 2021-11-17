const fs = require('fs');

const book = {
    name: 'JavaScript is Everywhere!',
    author: 'Asad Anik',
    age: 22
};

// convert the book Object into JSON String..
const bookJSON = JSON.stringify(book);

// Store this JSON into JSON file..
fs.writeFileSync('JSON-1.json', bookJSON);


// Now Read Data from this JSON file..
const bufferData = fs.readFileSync('JSON-1.json');

// converting Buffer data to String..
const bufferToString = bufferData.toString();

// now convert this string JSON to Object..
const JsonStringToObject = JSON.parse(bufferToString);
console.log(JsonStringToObject);

// Update Now...
JsonStringToObject.name = 'Node is a runtime!';
JsonStringToObject.author = 'Ryan Dahl';
JsonStringToObject.age = 26;

// make it to JSON String after Update and write the file again..
const newBookJSON = JSON.stringify(JsonStringToObject);
fs.writeFileSync('JSON-1.json', newBookJSON);

// showing the update..
// first have to convert into Object..
const newBookToObject = JSON.parse(newBookJSON);
console.log(newBookToObject);