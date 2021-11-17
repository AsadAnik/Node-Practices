const express = require('express');
const app = express();

// Routes..
app.get('/', (req, res) => {
    res.send('Welcome!');
});

// Weather..
app.get('/weather', (req, res) => {
    if (!req.query.address) return res.send({ error: 'You must provide an address!' });

    console.log(req.query);
    res.send(`There is searched for : ${req.query.address}`);
});


// Server..
const HOST = 'localhost' || process.env.HOST;
const PORT = 4000 || process.env.PORT;

// Listen to HOST:PORT/..
app.listen(PORT, HOST, () => {
    console.log(`Server is listening on http://${HOST}:${PORT}`);
});