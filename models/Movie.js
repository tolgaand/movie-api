const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const MovieSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    category: String,
    country: String,
    year: Number,
    imdb_score: Number,
    date: {
        type: Date,
        default: Date.now
    },
    director_id: Schema.Types.ObjectId
});

module.exports = mongoose.model("movie", MovieSchema);