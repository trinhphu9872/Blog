const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);
const Courses = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String },
        id: { type: String, required: true },
        image: { type: String },
        slug: { type: String, slug: 'name', unique: true },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('Courses', Courses);
