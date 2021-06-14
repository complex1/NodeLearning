const FileDB = require('../plugin/fileDB/index')

const document_name = 'product'
const product_document = new FileDB(document_name)

module.exports = class product {
  constructor ({ name, quantity, price }) {
    this.name = name
    this.quantity = quantity
    this.price = price
  }

  save (cb) {
    product_document.set(this, cb)
  }

  getAll (cb) {
    product_document.getAll(cb)
  }

  getById (id, cb) {
    product_document.getById(id, cb)
  }

  deleteById (id, cb) {
    product_document.deleteById(id, cb)
  }
}