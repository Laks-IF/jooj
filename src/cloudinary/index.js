const cloudinary = require("cloudinary").v2;

cloudinary.config(require("./config"));

module.exports = cloudinary;