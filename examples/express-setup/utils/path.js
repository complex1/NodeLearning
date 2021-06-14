const path = require('path')


// process.mainModule.filename is use to get root file name
module.exports = path.dirname(process.mainModule.filename)