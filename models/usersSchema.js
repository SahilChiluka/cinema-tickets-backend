const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
    }
},{timestamps:true});

const usersModel = mongoose.model('user',usersSchema);

module.exports = usersModel;