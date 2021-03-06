// setting controoller
const course = require('../models/Course');
const { mongoToArrayObject } = require('../../util/mongoose');
class SiteController {
    index(req, res, next) {
        course
            .find({})
            .then((course) => {
                res.render('home', {
                    course: mongoToArrayObject(course),
                });
            })
            .catch(next);
    }

    sreach(req, res, next) {
        course
            .find({})
            .then((course) => {
                res.render('sreach', {
                    course: mongoToArrayObject(course),
                });
            })
            .catch(next);
    }
}

module.exports = new SiteController();
