const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');
const querystring = require('querystring');

// bodyParser Middleware..
const urlencoded = bodyParser.urlencoded({extended: false});

// bodyParser to JSON Data Middleware..
const jsonParser = bodyParser.json();

// to genarate static CSS files link middleware..
app.use('/css', express.static(__dirname + '/public/css'));

// root routes middleware..
app.use('/', (req, res, next) => {
    console.log(`Someone made a request for ${req.url}`);
    res.cookie('asadanik', 22);

    next();
});


// static CSS link..
app.get('/', (req, res) => {
    res.send(`
        <html>
            <head>
                <link rel="stylesheet" type="text/css" href="/css/style.css" />
            </head>

            <body>
                <h1>Hello Node Express!</h1>
            </body>
        <html>
    `);
});


// User form..
app.get('/user', (req, res) => {
    const HTML = fs.readFileSync(`${__dirname}/index.html`);
    res.send(`${HTML}`);
});

// POST User form..
app.post('/enteruser', urlencoded, (req, res) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;

    console.log(firstname);
    console.log(lastname);

    res.sendStatus(200);
});

// User form with JSON data..
app.get('/user_json', (req, res) => {
    const HTML = fs.readFileSync(`${__dirname}/jsonpost.html`);
    res.send(`${HTML}`);
});

// POST User JSON form...
app.post('/enteruser_json', jsonParser, (req, res) => {
    console.log(req.body);

    res.sendStatus(200);
});


// Dynamic routing..
app.get('/user/:id/:username', (req, res) => {
    const id = req.params.id;
    const username = req.params.username;
    res.send(`User id is : ${id} and username is : '${username}'`);
});

// Query data into url like this -> ( /api/user?id=10&name=asadanik )..
app.get('/api/user', (req, res) => {
    let userId = req.query.id;
    let username = req.query.name;

    res.send({ id: userId, username});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT);