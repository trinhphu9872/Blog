const express = require('express');
const routes = express.Router();
// Controller
const MeController = require('../app/controllers/MeController');

routes.get('/stored/courses', MeController.storeCourse);

module.exports = routes;
