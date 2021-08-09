// setting controoller
const course = require('../models/Course');
class SiteController {
    index(req, res) {
        course.find({}, (err, doc) => {
            return !err ? res.json(doc) : res.status(400).json({error : "Messgae error"})
        })
    }

    sreach(req, res) {
        res.render('sreach');
    }
}

module.exports = new SiteController();
