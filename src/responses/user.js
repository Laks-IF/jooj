const userResponses = {
    alreadyExists: {
        message: "User already exists on database",
        code: "user/already-exists",
        model: "UserSchema",
        status: 400
    },
    userNotExists: {
        message: "This user not exists",
        code: "user/not-exists",
        model: "UserSchema",
        status: 400
    },
    unknownError: {
        message: "Unknown error",
        code: "user/unknown-error",
        model: "UserSchema",
        status: 500
    },
    successCreated: {
        message: "User created with success",
        code: "user/created-with-success",
        model: "UserSchema",
        status: 201
    },
    successUpdated: {
        message: "User updated with success",
        code: "user/updated-with-success",
        model: "UserSchema",
        status: 200
    },
    invalidName: {
        message: "Names cannot have accents or spaces",
        code: "user/invalid-name",
        model: "UserSchema",
        status: 400
    },
    successDeleted: {
        message: "User deleted with success",
        code: "user/deleted-with-success",
        model: "UserSchema",
        status: 204
    },
    notFoundPagination: {
        message: "No more results on this page",
        code: "user/pagination-not-found",
        model: "UserSchema",
        status: 400
    },
    successPagination: {
        message: "Success fetch results on this page",
        code: "user/pagination-with-success",
        model: "UserSchema",
        status: 200
    },
    successFetched: {
        message: "Success user fetch",
        code: "user/get-with-success",
        model: "UserSchema",
        status: 200
    },
    invalidPassword: {
        message: "Invalid password for this user",
        code: "user/invalid-password",
        model: "UserSchema",
        status: 400
    },
    successAuth: {
        message: "Success auth, user logged",
        code: "user/success-auth",
        model: "UserSchema",
        status: 200
    },
    unauthorized: {
        message: "Permission denied",
        code: "user/unauthorized",
        model: "UserSchema",
        status: 401
    },
    invalidRecoveryCode: {
        message: "Invalid recovery code",
        code: "user/invalid-recovery-code",
        model: "UserSchema",
        status: 400
    }
}

module.exports = userResponses;