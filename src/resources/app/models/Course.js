const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Courses = new Schema({
    name: { type: String, min: 1 },
    age: { type: String, min: 1 },
    des: { type: String },
    CreAt: { type: Date, default: Date.now },
    EndAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Courses', Courses);
