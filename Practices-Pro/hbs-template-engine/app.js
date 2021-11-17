const express = require('express');
const path = require('path');
const app = express();
const hbs = require('hbs');

// Template engine set hbs (handlebars) with express..
app.set('view engine', 'hbs');


/** 
 * Customizing the view directory..
 * By default location is views directory , but we can customise it into another.. 
 **/

const viewsPath = path.join(__dirname, 'templates/views');
const partialsPath = path.join(__dirname, 'templates/partials');
const publicDirectoryPath = path.join(__dirname, 'public');

// middleware..
app.use(express.static(publicDirectoryPath));

// setup handlebars locations..
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);


// Routes..
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Node App | HOME',
        name: 'Asad Anik'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'Node App | ABOUT',
        aboutH1: 'This is our about page',
        'author-name': 'Asad Anik'
    });
});

// Page not found..
app.get('/about/*', (req, res) => {
    res.render('404', {
        title: 'About article not found',
        errorMsg: '404 Page not found',
        message: 'There is nothing found into server inside about\'s page.'
    });
});

app.get('/*', (req, res) => {
    res.render('404', {
        title: 'Not Found',
        errorMsg: '404 Page not found.',
        message: 'The page is not exists into your server'
    });
});



// Server..
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 8080;

app.listen(PORT, HOST, () => {
    console.log(`Server is listening on http://${HOST}:${PORT}`);
});