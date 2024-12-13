const mongoose = require('mongoose');

let uri = "mongodb://localhost:27017/moviebooking";

const connectDB = () => {
    console.log("Database Connected");
    return mongoose.connect(uri);
};

module.exports = connectDB;