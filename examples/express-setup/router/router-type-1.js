const express = require('express')
const router = express.Router()

router.get('/router-1', (req, res) => {
  res.send('you called router 1')
})

module.exports = router