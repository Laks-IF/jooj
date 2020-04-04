const mongo = require("mongoose");

const { URL: DB_URL } = require("./config");

mongo.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => console.log("Database Connection 100%"));

mongo.set('useCreateIndex', true);

module.exports = mongo;
