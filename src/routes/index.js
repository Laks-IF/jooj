const path = require('path');
const { readdirSync } = require('fs');

function initRoutes(app) {
    readdirSync(path.join(__dirname))
        .filter(fileName => fileName !== "index.js")
        .forEach(fileName => {
            const fullPath = path.join(__dirname, fileName)
            require(fullPath)(app)
        });
}

module.exports = initRoutes;