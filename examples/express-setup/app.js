const express = require('express')
const path = require('path')

const router_1 = require('./router/router-type-1')
const router_2 = require('./router/router-type-2')
const basepath = require('./utils/path')
// base path of Project
console.log(basepath)

// create an express APP
const app = express()

app.use(express.static(path.join(__dirname, 'public')))

// Enable Body parsing in post,put,delete methods
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// include all router-type-1 paths with some base path
app.use('/router-1-basepath', router_1)

// include all router-type-1 paths with some base path
app.use(router_2)

app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'home.html'))
})

app.post('/postdata', (req, res) => {
  console.log(req.body)
  res.send('')
})

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})

app.listen(3000, () => {
  console.log('server started')
})