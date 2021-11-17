// This is without any library HTTP request row...
const https = require('https');
const url = `https://jsonplaceholder.typicode.com/users`;

// make request to data response..
const request = https.request(url, (response) => {
    let data = '';

    response.on('data', (chunk) => {
        data = data + chunk.toString();
    });

    response.on('end', () => {
        const body = JSON.parse(data);
        console.log(body);
    });
});

// if error occurs..
request.on('error', (err) => {
    console.log(err);
});

request.end();