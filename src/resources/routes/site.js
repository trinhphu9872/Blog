const express = require('express')
const routes = express.Router();

const siteController = require('../app/controllers/SiteController')

routes.use('/sreach',siteController.sreach)
routes.use('/', siteController.index)

module.exports = routes;