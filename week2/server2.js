const connect = require('connect')
const app = connect()

function logger(req, res, next)
{
    console.log(req.method, req.url)
    next()
}

function hello(req, res, next)
{
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hello')
}

function goodbye(req, res, next)
{
    res.setHeader('Content-Type', 'text/plain')
    res.end('Adios')
}

app.use(logger)
app.use('/hello', hello)
app.use('/goodbye', goodbye)

app.listen(4000)
console.log('Running on http://127.0.0.1:4000/hello')