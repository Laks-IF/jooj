const mongo = require("mongoose");

const { URL: DB_URL } = require("./config");

mongo.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

mongo.set('useCreateIndex', true);

module.exports = mongo;
