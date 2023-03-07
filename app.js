const http = require('http')

const server = http.createServer((req,res) =>{
    if (req.url === '/'){
        return res.end('Welcome to our server')
    }
    if (req.url === '/about'){
        return res.end('What you wanna know about us')
    }
    res.end(`
    <h1> Oops </h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">go back home</a>
    `)
})

server.listen(3000)