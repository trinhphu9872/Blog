const express = require('express');
const routes = express.Router();
// Controller
const CoursesController = require('../app/controllers/CoursesController');

routes.get('/create', CoursesController.create);
routes.post('/store', CoursesController.store);
routes.put('/:id', CoursesController.update);
routes.get('/:id/edit', CoursesController.edit);
routes.get('/:slug', CoursesController.show);

module.exports = routes;
