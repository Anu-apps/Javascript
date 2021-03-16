const mongoose = require('mongoose')

const { Schema } = mongoose;

const QueriesSchema = new Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    query: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

const Queries = mongoose.model('Queries', QueriesSchema);

module.exports = Queries