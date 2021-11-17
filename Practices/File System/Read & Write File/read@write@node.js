///The Reading and writing with NodeJS...
const os = require('os');
const fs = require('fs');

const user = os.userInfo();
const date = new Date();

const message = `User "${user.username}" started App ${date}`;

//Appending File for created and exported file..
fs.appendFile('user@read@write.txt', message, (err) => {
    if(err) throw console.log(`Can't create file`);
    console.log(`File Wrote Successfully, You can read now!`);
})
