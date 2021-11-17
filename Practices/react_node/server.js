const express = require('express');
const app = express();


// Users API..
app.get('/api/users', (req, res) => {
    res.json([
        {
            id: 1, 
            username: 'asadanik'
        }, 
        {
            id: 2, 
            username: 'khadijanuku'
        }
    ]);
});

// Cars API.. 
app.get('/api/cars', (req, res) => {
    res.json([
        {
            id: 1,
            brand: 'Ferrari',
            model: 'F1'
        },

        {
            id: 2,
            brand: 'Lamborghini',
            model: 'Carbon x'
        }
    ]);
});


// servers host and port..
const PORT = process.env.PORT || 8080;
const HOST = "localhost";

// listening server on host:port/..
app.listen(PORT, HOST, () => {
    console.log(`server is running on ${HOST}:${PORT}`);
});