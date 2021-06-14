const http = require('http')

// Create a server
const server = http.createServer((req, res) => {
  const url = req.url
  const method = req.method
  const headers = req.headers
  if (url === '/') {
    // A string
    res.write('You hit / path')
  } else if (url === '/postdata', method === 'POST'){
    res.write(`you hit /postdata path with Post Method`)
    const body = []
    req.on('data', (chunk) => {
      body.push(chunk)
    })
    req.on('close', () => {
      const parsedBody = Buffer.concat(body).toString()
      const message = parsedBody.split('=')[1]
      console.log(message)
    })
  }
})

// start server
server.listen(3000)