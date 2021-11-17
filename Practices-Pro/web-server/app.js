// Node Web Framework Express..
const path = require('path');
const express = require('express');
const app = express();

// make public root route..
const publicDirectoryPath = path.join(__dirname, 'public');

// middleware..
app.use(express.static(publicDirectoryPath));


// HOST & PORT..
const PORT = 3000 || process.env.PORT;
const HOST = 'localhost' || process.env.HOST;

// Server listen.
app.listen(PORT, HOST, () => {
    console.log(`Server is listening on http://${HOST}:${PORT}`);
});