// setting controoller
const course = require('../models/Course');
const { mongoToArrayObject } = require('../../util/mongoose');
class MeController {
    // GET me/stored/course
    storeCourse(req, res, next) {
        course
            .find({})
            .then((course) => {
                res.render('me/storeCourse', {
                    course: mongoToArrayObject(course),
                });
            })
            .catch(next);
    }
}

module.exports = new MeController();
