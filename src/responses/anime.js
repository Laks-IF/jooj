const userResponses = {
    alreadyExists: {
        message: "A anime entry with this id already exists on database",
        code: "anime/already-exists",
        model: "AnimeSchema",
        status: 400
    },
    animeNotExists: {
        message: "This anime entry not exists",
        code: "anime/not-exists",
        model: "AnimeSchema",
        status: 400
    },
    unknownError: {
        message: "Unknown error",
        code: "anime/unknown-error",
        model: "AnimeSchema",
        status: 500
    },
    successCreated: {
        message: "Anime entry created with success",
        code: "anime/created-with-success",
        model: "AnimeSchema",
        status: 201
    },
    successDeleted: {
        message: "Anime entry deleted with success",
        code: "anime/deleted-with-success",
        model: "AnimeSchema",
        status: 204
    },
    notFoundPagination: {
        message: "No more results on this page",
        code: "anime/pagination-not-found",
        model: "AnimeSchema",
        status: 400
    },
    successPagination: {
        message: "Success fetch results on this page",
        code: "anime/pagination-with-success",
        model: "AnimeSchema",
        status: 200
    },
    successFetched: {
        message: "Success Anime entry fetch",
        code: "anime/get-with-success",
        model: "AnimeSchema",
        status: 200
    },
    unauthorized: {
        message: "Permission denied",
        code: "anime/unauthorized",
        model: "AnimeSchema",
        status: 401
    },
}

module.exports = userResponses;