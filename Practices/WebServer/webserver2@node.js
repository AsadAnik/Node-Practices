const http = require('http');
const fs = require('fs');


///PORT & File Loaded here..
const HTML_FILE = fs.readFileSync('./index.html');
const PORT = process.env.PORT || 2020;


//Creating the Server with web_server http..
http.createServer((req, res) => {
		res.writeHead(200, {'Content-type':'text/html'});
		res.end(HTML_FILE);

}).listen(PORT, '127.0.0.1', () => {
	console.log(`The Web_Server 2 is Connected in localhost:${PORT}`);
	console.log(`File Synced Successfully..`);
	console.log(`Server Is Running...`);
});
