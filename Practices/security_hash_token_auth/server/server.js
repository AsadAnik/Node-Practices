const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const app = express();

// Import Model..
const { User } = require('./models/user');

// Import middleware..
const { auth } = require('./middlewares/auth');


// mongoose promise make and connect..
mongoose.Promise = mongoose.Promise;
mongoose.connect('mongodb://localhost:27017/auth', {
    useUnifiedTopology: true, 
    useNewUrlParser: true, 
    useCreateIndex: true
    
}, (err) => {
    if (err) return console.log(err);
    console.log("Successfully Connected to MongoDB!");
});

// middlewares to node..
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// make POST..
// check it with Postman..
app.post('/api/user/', function (req, res){
    const user = new User({
        email: req.body.email,
        password: req.body.password,
    });

    user.save(function(err, doc) {
        if (err) return res.status(400).send(err);
        res.status(201).send(doc);
    });
});


// make login route..
app.post('/api/user/login/', function(req, res){
    User.findOne({email: req.body.email}, function(err, user){
        if (err) return res.status(400).send(err);
        if (!user) return res.status(401).json({message: "Auth failed, user not found"});

        // Compare password with registered user..
        user.comparePassword(req.body.password, function(err, isMatch){
            if (err) return res.status(400).send(err);
            if (!isMatch) return res.status(401).json({message: "Wrong Password!"});
            // res.status(201).send(isMatch);

            // Set Cookie from jwt..
            user.generateToken(function(err, user){
                if (err) return res.status(400).send(err);
                res.cookie('auth', user.token).send('ok');
            });
        });
    });
});


// Auth route (get access with Cookie)..
app.get('/user/profile', auth, function(req, res){
    res.status(200).send(req.token);
});


// make server and port..
const PORT = process.env.PORT || 8081;

app.listen(PORT, () => {
    console.log(`Started on port ${PORT}`);
});
