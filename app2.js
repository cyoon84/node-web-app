const http = require('http');
const uc = require('upper-case');
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
res.statusCode = 200;
res.setHeader('Content-Type', 'text/plain');
res.end(uc.upperCase("Hello World!"));
});
server.listen(port, hostname, () => {
console.log(`Server running at http://${hostname}:${port}/`);
})
