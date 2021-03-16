const mongoose = require('mongoose')

const { Schema } = mongoose;

const ProjectSchema = new Schema({
    name: { type: String, required: true },
    desc: { type: String, required: true },
    catId: { type: Schema.Types.ObjectId, ref: 'Categories' },
    image: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

const Projects = mongoose.model('Projects', ProjectSchema);

module.exports = Projects