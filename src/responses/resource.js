const resourceResponses = {
    invalidResource: {
        message: "Invalid resource, the resource requested not exists",
        code: "resource/invalid-resource",
        model: "ResourceSchema",
        status: 400
    },
    unknownError: {
        message: "Unknown error",
        code: "resource/unknown-error",
        model: "ResourceSchema",
        status: 500
    },
    notFoundPagination: {
        message: "No more results on this page",
        code: "resource/pagination-not-found",
        model: "ResourceSchema",
        status: 400
    },
    successPagination: {
        message: "Success fetch results on this page",
        code: "resource/pagination-with-success",
        model: "ResourceSchema",
        status: 200
    },
}

module.exports = resourceResponses;