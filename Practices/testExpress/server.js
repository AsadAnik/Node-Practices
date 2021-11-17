///Creating the Server with Node Express.js Framework...
const express = require('express');
const App = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

//Importing the Modules for Application...
const Routes = require('./api/routes/Route');

//Let's make listening the ports...
const PORT = process.env.PORT || 5000;
App.listen(PORT, () => {
    console.log(`server is Running on localhost:${PORT}`);
});

///The third_party Middleware Uses..
//Morgan Middleware..
App.use(morgan('dev'));

//BodyParser Middleware..
App.use(bodyParser.urlencoded({extended: true}));
App.use(bodyParser.json());

//Cors Middleware..
App.use(cors());

///Understanding about the Middleware functions...
//Custom Middleware..
App.use((req, res, next) => {
    console.log(`I'm a middleware function`);
    next()
});

//Using the Routes here...
App.use('/posts', Routes);

///Creating Get Method for routes...
App.get('/', (req, res) => {
    res.send('<h1>Hello The Server is Connected</h1>')
});