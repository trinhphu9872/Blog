const express = require('express');
const routes = express.Router();
// Controller
const CoursesController = require('../app/controllers/CoursesController');

routes.get('/create', CoursesController.create);
routes.post('/store', CoursesController.store);
routes.get('/:slug', CoursesController.show);

module.exports = routes;
