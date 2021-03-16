const mongoose = require('mongoose')

const { Schema } = mongoose;

const CategoriesSchema = new Schema({
    name: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

const Categories = mongoose.model('Categories', CategoriesSchema);

module.exports = Categories