const path = require('path');
const { readdirSync } = require('fs');

const entityErrors = {};

readdirSync(path.join(__dirname))
    .filter(fileName => fileName !== "index.js")
    .forEach(fileName => {
        const fullPath = path.join(__dirname, fileName)

        const [name] = fileName.split(".");

        entityErrors[name] = require(fullPath);
    });

module.exports = entityErrors;