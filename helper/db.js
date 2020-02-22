const mongoose = require("mongoose");

module.exports = () => {
    mongoose.connect('mongodb+srv://tolgaand:47017905126@cluster0-ziy63.mongodb.net/test?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    mongoose.connection.on("open", () => {
        console.log("mongoDB: Connection okey")
    });

    mongoose.connection.on("error", (err) => {
        console.log("mongoDB: Connection not okey", err);
    });

    mongoose.Promise = global.Promise;
};