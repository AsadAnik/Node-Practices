const http = require('http');
const fs = require('fs');


///Make File with load...
const HTML_FILE = fs.readFileSync('./index.html');
const NOT_FOUND = fs.readFileSync('./404.html');

///The Simple Object..
const simple_api_obj = {
	developer: 'Asad Anik',
	age: 20,
	sector: 'FullStack Software Engineer',
	technology: 'Web, Mobile & Desktop'
};
//Make Object into JSON...
const jsonFile = JSON.stringify(simple_api_obj);


///Creating The Server with HTTP Module..
const server = http.createServer((req, res) => {
	if(req.url === '/'){
		res.writeHead(200, {'Content-type':'text/html'});
		res.end(HTML_FILE);

	}else if(req.url === '/api'){
		res.writeHead(200, {'Content-type':'application/json'});
		res.end(jsonFile);

	}else{
		res.writeHead(404, {'Content-type':'text/html'});
		res.end(NOT_FOUND);
	}
});


//Make some PORTS..
const PORT = process.env.PORT || 2000;
const HOST = 'localhost';

//Listening the server PORT..
server.listen(PORT, HOST, () => {
	console.log(`The Web_Server 3 is Connected in ${HOST}:${PORT}`);
	console.log(`JSON API & FILE is Synced Successfully..`);
	console.log(`Server Is Running...`);
});