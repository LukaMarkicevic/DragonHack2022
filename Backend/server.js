const http = require('http')

const server = http.createServer((req, res) => {
    // Send response
    if (req.url === '/') {
	res.end('<h1>Welcome to the game</h1>')
    } else {
    	res.end('Suck the balls!')
    }
})

server.listen(5000, 'localhost', () => {
    console.log('Server is listening at localhost on port 5000')
}) 




