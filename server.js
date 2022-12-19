const http = require('http');
const url = require('url');
const StringDecoder = require('string_decoder').StringDecoder;


const server = http.createServer((req, res) => {
    let decoder = new StringDecoder('utf-8');
    let buffer = '';
    req.on('data', function (data) {
        buffer += decoder.write(data);
    });
    req.on('end', function (end) {
        buffer += decoder.end();
        res.end('Hello Node Js');
        console.log(buffer);
    });
})

server.listen(8000, 'localhost', () => {
    console.log("server running at http://localhost:8000");
})