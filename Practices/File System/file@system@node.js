///The NodeJS fileSystem...
const fs = require('fs');

const data = {
    name: 'Asad Anik',
    email: 'asadanik@yahoomail.com',
}

//Making this object to string...
const makeString = JSON.stringify(data);
// console.log(data)
// console.log(makeString);

///Write File with Objects String data..
fs.writeFile('./myFile.json', makeString, (error) => {
    if(error){
        console.log(error);
        return false;
    }
    console.log('File Created Successfully');
})

console.log('\n\n');//--------------Takes NewLine to Separate...

///Reading the File...
fs.readFile('./myFile.json', (error, data) => {
    if(error) throw error;

    // console.log(data);
    const makeObj = JSON.parse(data); //Maked Object into String(To Read)..
    console.log(makeObj)
})

