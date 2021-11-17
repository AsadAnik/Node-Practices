///Importing the HTTP from NodeJS..
const http = require('http');
const url = require('url');
const userModule = require('./module/Module');

///Creating Server and work with request & response..
const server = http.createServer((req, res) => {
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(`current date is ${userModule.currentDateTime()}`);
	const queried = url.parse(req.url, true);
	const path_name = queried.pathname;
	console.log(queried);
	res.end(path_name);

});

//Create Some PORTS...
const PORT = 8009 || process.env.PORT;

//Work with PORTS to server...
server.listen(PORT, (err) => {
	if(err) throw err;
	console.log(`Server Is Running PORT on localhost:${PORT}`);
});
