const express = require('express')

const router = express.Router()
router.use((req, res) => {
  res.render('Error-404', {})
})

module.exports = router