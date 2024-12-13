const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
    email: {
        type: String,
    },
    login: {
        type: String,
    },
    logout: {
        type: String,
    }
});

const logModel = mongoose.model('userlog',logSchema);

module.exports = logModel;