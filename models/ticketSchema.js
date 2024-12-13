const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
    userid: {
        type: String,
    },
    movieid: {
        type: String,
    },
    movieimage: {
        type: String,
    },
    moviename: {
        type: String,
    },
    useremail: {
        type: String,
    },
    price: {
        type: Number,
    },
    seats: {
        type: [],
    }
},{timestamps:true});

const Ticketmodel = mongoose.model('ticket', ticketSchema);

module.exports = Ticketmodel;
