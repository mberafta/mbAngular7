const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    hash: String,
    salt: String
});

module.exports = mongoose.model('User', userSchema);