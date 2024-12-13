const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    releasedate: {
        type: String,
        required: true
    },
    baseprice: {
        type: Number,
    },
    seats: {
        type: [],
    }
},{timestamps:true})

const movieModel = mongoose.model('movies', movieSchema);

module.exports = movieModel;