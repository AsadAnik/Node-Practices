const user = {
    username: 'asadanik',
    email: 'engr.asadanik@gmail.com',
    password: '12345'
};

// converting Object to JSON String..
const userJSON = JSON.stringify(user);
console.log(`JSON = ${userJSON}`);

// converting JSON String to Object..
const userObject = JSON.parse(userJSON);
console.log('Object = ', userObject);