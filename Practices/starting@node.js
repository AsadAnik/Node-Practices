///Simple practice about the nodejs for beggining...
const path = require('path');
const os = require('os');

///Collecting the items for specific result...
const documnet = process;
//const window = //forgoted..
const ourPath = path;
const user_info = os.userInfo();
const view_cpu = os.cpus();
const platform = os.platform();
const arch = os.arch();
const hostname = os.hostname();
const netWorkInterfaces = os.networkInterfaces();
const currentDirectory = __dirname;
const currentFilename = __filename;

//Some specific fixings test with Nodejs...
console.log('-------------WELCOME TO NODEJS----------------')
console.log('PROCESS--------------',documnet);
console.log('PATH-----------------', ourPath);

console.log('\n\n');

console.log('OS-USER_INFO-----------', user_info);
console.log('OS-CPUS--------------', view_cpu);
console.log('OS-PLATFORM-----------', platform);
console.log('OS-ARCH---------------', arch);
console.log('OS-HOSTNAME-----------', hostname);
console.log('OS-NETWORK-INTERFACES---------', netWorkInterfaces);

console.log('\n\n');

console.log('------------------------------',process);
console.log('===================THE ENV PATH OF PROCESS',process.env.PATH);

console.log('\n\n __dirname -> ______________', currentDirectory);
console.log('\n __filename -> ______________', currentFilename);


///Some Operations with PATH...
//Check if if the valid path-structured with..
const myRealPath = "D:/Repositories/Node/testing@node.js";

console.log('\n\nCHECKING PATH with (isAbsolute) _-_-_-_-_-_-_-_-_-_-_-_-_-');
console.log(path.isAbsolute(myRealPath));


//Resolving the New PAth...
const createNewOne = path.resolve(__dirname, 'Asad Anik', 'AA');
console.log('\n\n Resolved New PATH is ---->>>>', createNewOne);