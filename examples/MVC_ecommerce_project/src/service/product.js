const Product = require('../modal/product')

const productService = {}
const stateLessProduct = new Product({ name: '', quantity: '', price: ''  })

productService.getAllProduct = (cb) => {
  stateLessProduct.getAll(cb)
}

productService.addProduct = (productData, cb) => {
  const product = new Product(productData)
  product.save(cb)
}

module.exports = productService