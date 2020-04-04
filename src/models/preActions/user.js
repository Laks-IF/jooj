const bcrypt = require("bcryptjs");

const { uploader } = require("../../cloudinary");

const AnimeSchema = require("../AnimeSchema");

const preSave = model => {
    model.pre("save", async function (next) {
        const hash = await bcrypt.hash(this.password, 10);

        this.password = hash;

        next();
    });
}
const preDelete = model => {
    model.pre("findOneAndRemove", async function () {
        const doc = await this.findOne(this.getFilter());
        await deleteFile(doc.photo.public_id);
        await AnimeSchema.deleteMany({ fk_user_id: doc._id.toString() });
    });
}

async function deleteFile(currentPublicID) {
    await uploader.destroy(currentPublicID);
}

module.exports = model => {
    preSave(model);
    preDelete(model);
}