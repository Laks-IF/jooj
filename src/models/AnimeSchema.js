const mongo = require("../database");

const { Schema } = mongo;

const AnimeSchema = new Schema(
    {
        fk_user_id: {
            type: String,
            required: true
        },
        fk_anime_id: {
            type: String,
            required: true
        },
        ref_user_name: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

require("./preActions/anime")(AnimeSchema);

module.exports = mongo.model("Anime", AnimeSchema);