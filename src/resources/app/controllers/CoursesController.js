const course = require('../models/Course');
const { mongoObject } = require('../../util/mongoose');

class CoursesController {
    show(req, res, next) {
        course
            .findOne({ slug: req.params.slug })
            .then((course) => {
                res.render('course/show', {
                    course: mongoObject(course),
                });
            })
            .catch(next);
    }
}

module.exports = new CoursesController();
