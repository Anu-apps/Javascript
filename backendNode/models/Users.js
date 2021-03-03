const mongoose = require('mongoose')

const { Schema } = mongoose;

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    password: { type: String, required: true },
    status: { type: Boolean, default: false },
    role: { type: String, enum: ['customer', 'admin'], default: 'customer' },
    accessToken: { type: String },
    refreshToken: { type: String },
    date: { type: Date, default: Date.now }
});

const Users = mongoose.model('Users', userSchema);

module.exports = Users