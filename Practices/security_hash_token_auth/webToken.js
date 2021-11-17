const { MD5 } = require('crypto-js');
const jwt = require('jsonWebToken');

// create own custom token here..
const secret = "mysecretpassword";
const secretSalt = "dfkdjoefiisojfjaeioasf";

const user = {
    id: 1,
    token: MD5('SDFGSLKS').toString() + secretSalt
};

// console.log(user);

const receivedToken = "7418e537a211391f6ccf89618dcf18fddfkdjoefiisojfjaeioasf";

if (receivedToken === user.token){
    console.log("Move Forward!");
}


// ------ JWT Web Token -------
// with JWT (json-web-joken)..
const id = 1;

// encode the JWT..
const token = jwt.sign(id, secret);

// received token from jwt..
const receivedTokenJwt = 'eyJhbGciOiJIUzI1NiJ9.MQ.WnXuD9ocyAYBjrogSwA2Vz5-ubPNze8-UGlAF2Pr4-8';

// decode the jwt..
const decodeToken = jwt.verify(receivedTokenJwt, secret);

console.log(token);
console.log(decodeToken);