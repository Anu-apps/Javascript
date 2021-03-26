const mongoose = require('mongoose')

const { Schema } = mongoose;

const PortfolioSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
    images: { type: [String], required: true },
    location: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

const Portfolio = mongoose.model('portfolio', PortfolioSchema);

module.exports = Portfolio