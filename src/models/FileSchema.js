const mongo = require("../database");

const { Schema } = mongo;

const FileSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        ext: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true,
        },
        public_id: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = FileSchema;