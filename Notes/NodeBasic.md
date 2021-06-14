## How To quit event loop ?
```javascript
process.exit()
```

## How to get Base path of project
```javascript
path.dirname(process.mainModule.filename)
```

## Headers Detail
Link: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers

## Event Loop
fundamental of Event Imp Topic.
https://www.youtube.com/watch?v=8zKuNo4ay8E


## Debugging Node.js in Visual Studio Code
Want to dive super-deep into the latest debugging capabilities Visual Studio Code gives you (for Node.js apps)?
This article will be very helpful: https://code.visualstudio.com/docs/nodejs/nodejs-debugging


## Basic Express setup
```javascript
const express = require('express')

const app = express()

// set up all the middleware
// [method] is API method (get, put, post, delete)
// [path] its an regex that we use for path matching
// call back function is for call back req is request body and res is response body
// res.send is respond to client
app.[method]([path], (req, res) => {
  res.send('response data')
})

// Now my server listen on port number 3000
// one callback function will get called once server get started
app.listen(3000, () => {
  // server started
})
```