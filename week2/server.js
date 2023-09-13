const http = require('http')

http.createServer((req, res) =>
{
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    })
    res.end('Hello World')
}).listen(4000)

console.log('server running at http://12.7.0.0.1:4000')