const { calcSkip, isValidName, generateRecoveryCodes } = require("../utils");

const { user: userResponses } = require("../responses");
const { generateResponse: generate, compareId, exists } = require("../utils");

const { resource: resourceResponses } = require("../responses");

const UserSchema = require("../models/UserSchema");
const AnimeSchema = require("../models/AnimeSchema");

const RESOURCES_SCHEMAS = {
    ANIME: {
        NAME: "animes",
        SCHEMA: AnimeSchema
    },
    USER: {
        NAME: "users",
        SCHEMA: UserSchema
    }
}

const ResourceController = {
    Index: async function (req, res) {
        try {
            const { resource } = req.params;
            let {
                exact = "false",
                limit = 2,
                order = "desc",
                filter = "none",
                page = "1"
            } = req.query;


            let Schema = getSchema(resource);
            if (!exists(Schema)) {
                const { invalidResource } = resourceResponses
                return res
                    .status(invalidResource.status)
                    .json(generate(invalidResource, { error: true }));
            }

            page = Number(page);
            limit = Number(limit);
            exact = exact === "true";

            order = order === "desc" ? "-1" : "+1";
            let skip = null;

            skip = calcSkip(page, limit).skip;

            if (filter === "none") {
                filter = {};
            } else {
                let columns = [];
                let values = [];

                filter.split("-").forEach((item, i) =>
                    i % 2 === 0 ? columns.push(item) : values.push(item)
                );

                filter = {};

                columns.forEach((column, i) => {
                    const value = values[i];
                    exact ?
                        filter[column] = value :
                        filter[column] = new RegExp('^' + value, "g");
                });
            }

            const total = await Schema.find(filter).estimatedDocumentCount();
            let totalPages = Math.ceil(total / limit);

            const currentResults = await Schema.find(filter)
                .skip(skip)
                .limit(limit)
                .sort([
                    ["createdAt", order]
                ]).select("-recovery_codes");


            if (!currentResults.length) {
                const { notFoundPagination: notFound } = resourceResponses;
                return res.status(notFound.status).json(generate(notFound, {
                    error: true
                }));
            }

            skip = calcSkip(page + 1, limit).skip;
            const nextResults = await Schema.find(filter)
                .skip(skip)
                .limit(limit)
                .sort([
                    ["createdAt", order]
                ]).estimatedDocumentCount();

            const metadata = {
                hasMore: nextResults > 0,
                howManyDocsInNextPage: nextResults,
                totalDocs: total,
                currentPage: page,
                totalPages
            }

            const data = {
                results: currentResults,
                metadata,
            }

            const { successPagination } = resourceResponses;

            return res.json(generate(successPagination, {
                data
            }));

        } catch (error) {
            console.log(error);
            const { unknownError } = resourceResponses;
            return res
                .status(unknownError.status)
                .json(generate(unknownError, { error }));
        }
    }
}

function getSchema(resourceName) {
    switch (resourceName) {
        case RESOURCES_SCHEMAS.ANIME.NAME:
            return RESOURCES_SCHEMAS.ANIME.SCHEMA;

        case RESOURCES_SCHEMAS.USER.NAME:
            return RESOURCES_SCHEMAS.USER.SCHEMA;
    }
}

module.exports = ResourceController;