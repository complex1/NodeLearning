const express = require('express')
const path = require('path')
const basePath = require('../utils/path')
const router = express.Router()

const tasks = []

router.get('/', (req, res) => {
  // res.sendFile(path.join(basePath, 'views', 'todo.html'))
  res.render('todo', { tasks })
})

router.post('/add', (req, res) => {
  tasks.push(req.body.task)
  res.redirect('/todo/')
})

module.exports = router