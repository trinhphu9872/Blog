const course = require('../models/Course');
const { mongoObject } = require('../../util/mongoose');
const Course = require('../models/Course');

class CoursesController {
    // [get]
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
    // [get]
    create(req, res, next) {
        res.render('course/create');
    }
    // [post]
    store(req, res, next) {
        const data = req.body;
        data.image = `https://img.youtube.com/vi/${data.id}/sddefault.jpg`;
        const course = new Course(data);
        course
            .save({})
            .then(() => {
                res.redirect('/');
            })
            .catch(next);
    }
}

module.exports = new CoursesController();
