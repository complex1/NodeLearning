const express = require('express')
const path = require('./util/path')

const config = require('../config.json')
const productRouter = require('./router/product')
const errorRouter = require('./router/error')
const routerPath = require('./config/router')

const server = express()

server.set('view engine', 'ejs')
server.set('views', path.get('views'))

server.use(express.json())
server.use(express.urlencoded({"extended": true}))

server.use(routerPath.product.basePath, productRouter)
server.use(errorRouter)

server.listen(config.port)