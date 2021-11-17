const http = require('http');
const fs = require('fs');


//Getting Requist from http server..
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile('./index.html', (error, data) => {
            if(error) throw error;

            res.end(data);
        })
    }else{
        res.end('<h1 style="text-align: center">404 Page Not Found!</h1>')
    }
});


//Listening the server port from ...
///Can Add the PORT & HOST also..
const PORT = process.env.PORT || 9000;

server.listen(PORT, '127.0.0.1', () => {
    console.log(`Server Is Running on PORT localhost:${PORT}`);
    console.log(`File Read Successfully Done..`);
});
// console.log('Server Is Running...');
