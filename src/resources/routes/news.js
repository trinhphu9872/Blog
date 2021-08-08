const express = require('express');
const routers = express.Router();
const newsController = require('../app/controllers/NewsController');
// setting route and parameter and add controoller
routers.use('/:slug', newsController.show)
routers.use('/', newsController.index)

module.exports = routers;