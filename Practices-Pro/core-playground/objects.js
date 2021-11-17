// ES-6 objects property shorthan & destructuring..

// Shorthan property..
const personName = 'asadanik';
const age = 21;

const User = {
    personName,
    age
};

console.log(User);


// Destucturing property..
const Person = {
    personId: '12sfeskjie$331',
    username: 'asadanik',
    email: 'asadanik@gmail.com',
    password: '##@@asadanika@@##'
};

const { username, email } = Person;
console.log(`${username} : ${email}`);


// Function property Destucturing..
const tokenGenarator = function(name, { personId, email }){
    const token = name + personId;
    console.log(`Email is : ${email}, Session token -> ${token}`);
}

tokenGenarator(username, Person);


// Make Rename on Destructuring..
const { username: PersonName, email: PersonEmail } = Person;
console.log(PersonName, PersonEmail);