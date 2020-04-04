const path = require("path");

const multer = require('multer')

const { createUniqueId } = require("../utils");

const storage = multer.diskStorage({
    destination: path.normalize(path.join(__dirname, "..", "temp")),
    filename: (req, file, cb) =>
        cb(null, createUniqueId() + path.extname(file.originalname))
})

module.exports = {
    storage
}