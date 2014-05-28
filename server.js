var connect = require('connect'),
	port = process.argv[2] || 8080;

connect().use(connect.static(__dirname+"/app")).listen(port);
console.log("Static file server running at\n  => http://localhost:" + port + "/\nCTRL + C to shutdown");