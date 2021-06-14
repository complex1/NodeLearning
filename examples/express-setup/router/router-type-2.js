const express = require('express')
const router = express.Router()

router.get('/router-2', (req, res) => {
  res.send('you called router 2')
})

module.exports = router