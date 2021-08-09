const express = require('express');
const routers = express.Router();
const newsController = require('../app/controllers/NewsController');
// setting route and parameter and add controoller
routers.get('/:slug', newsController.show);
routers.get('/', newsController.index);

module.exports = routers;
