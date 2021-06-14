const express = require('express')

const routerPath = require('../config/router')
const productController = require('../controller/product')

const router = express.Router()

router.get(routerPath.product.productPage, (req, res) => {
  productController.productPage(req, res)
})

router.get(routerPath.product.addProductPage, (req, res) => {
  productController.addProductPage(req, res)
})

router.post(routerPath.product.addProduct, (req, res) => {
  productController.addProduct(req, res)
})

router.get(routerPath.product.getAll, (req, res) => {
  productController.getAllProduct(req, res)
})

module.exports = router