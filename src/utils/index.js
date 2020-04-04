const mongoose = require('../database');

function generateResponse(metadata, complement = {}) {
    const response = Object.assign({}, metadata, complement);

    return response;
}

function calcSkip(page, limit = 10) {
    const skip = (page - 1) * limit;
    return {
        limit,
        skip
    }
}

function isValidName(name) {
    let valid = true;

    const allLetters = name.split("");

    for (let i = 0; i < allLetters.length; i++) {
        const letter = allLetters[i];
        const code = letter.charCodeAt();

        if (code < 48) valid = false;
        else if (code > 57 && code < 65) valid = false;
        else if (code > 90 && code < 97) valid = false;
        else if (code > 122) valid = false;

        if (!valid) break;
    }

    return valid;
}

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateRecoveryCodes() {
    return Array.from({ length: 4 }).map(() => ({
        valid: true,
        code: Array.from({ length: 6 }).map(() => generateRandomNumber(0, 9).toString()).join("")
    }));
}

function createUniqueId() {
    let dt = new Date().getTime();
    let uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (
        c
    ) {
        let r = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
    });
    return "id-" + uuid;
}

function compareId(id, otherId) {
    return id.toString() === otherId.toString();
}

function exists(entity) {
    return typeof entity !== "undefined" && typeof entity !== "null" && !!entity;
}

function stringToObjectId(str) {
    return mongoose.Types.ObjectId(str);
}

module.exports = {
    generateResponse,
    calcSkip,
    isValidName,
    generateRandomNumber,
    generateRecoveryCodes,
    createUniqueId,
    compareId,
    exists,
    stringToObjectId
}