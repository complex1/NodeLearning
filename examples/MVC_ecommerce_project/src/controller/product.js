const productService = require('../service/product')
const routerPath = require('../config/router')

const productController = {}

productController.productPage = (req, res) => {
  productService.getAllProduct(data => {
    res.render('products', { products: data })
  })
}

productController.addProductPage = (req, res) => {
  res.render('addProduct')
}

productController.getAllProduct = (req, res) => {
  productService.getAllProduct(data => {
    res.send(data)
  })
}

productController.addProduct = (req, res) => {
  const product = req.body
  productService.addProduct(product, () => {
    res.redirect(routerPath.product.basePath + routerPath.product.addProductPage)
  })
}

module.exports = productController