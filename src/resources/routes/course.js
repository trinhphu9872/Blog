const express = require('express');
const routes = express.Router();
// Controller
const CoursesController = require('../app/controllers/CoursesController');

routes.get('/:slug', CoursesController.show);

module.exports = routes;
