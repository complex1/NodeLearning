const express = require('express')
const path = require('path')

const todo = require('./router/todo')

const app = express()

// Let our application know which template engine we are using
// app.set('view engine', 'pug')
app.set('view engine', 'ejs')

// Let our application know which folder we have our templates
// by default it's take views folder
// It is starting form parent folder
app.set('views', 'views')

app.use(express.json())
app.use(express.urlencoded({'extended': true}))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/todo', todo)

app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'views', '404.html'))
})

app.listen(3000)