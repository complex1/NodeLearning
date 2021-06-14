const path = require('path')

module.exports = {
  rootPath: path.dirname(process.mainModule.filename),
  get: (...relativePath) => path.join(path.dirname(process.mainModule.path), 'src', ...relativePath)
}
