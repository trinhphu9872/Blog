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
    // get update  /course/{{this._id}}/edit
    edit(req, res, next) {
        course
            .findById(req.params.id)
            .then((course) =>
                res.render('course/edit', {
                    course: mongoObject(course),
                }),
            )
            .catch(next);
    }

    // PUT course/:id
    update(req, res, next) {
        console.log(res.body);
        const data = req.body;
        data.image = `https://img.youtube.com/vi/${data.id}/sddefault.jpg`;
        Course.updateOne({ _id: req.params.id }, data)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next);
    }
}

module.exports = new CoursesController();
