const authConfig = require("../config");
const jwt = require("jsonwebtoken");

const { user: userResponses } = require("../responses");
const { generateResponse: generate } = require("../utils");

const defaultOptions = {
    nextWithAuthState: false
}

const middleware = (userOptions = {}) => {
    const options = Object.assign({}, defaultOptions, userOptions);

    const { nextWithAuthState } = options;

    return function (req, res, next) {

        const { authorization } = req.headers;

        if (!nextWithAuthState) {
            if (!isValidAuthorization(authorization)) {
                const { unauthorized } = userResponses;

                return res
                    .status(unauthorized.status)
                    .json(generate(unauthorized, { error: true }));
            }

            const token = authorization.split(" ")[1];
            let isValidToken = verifyToken(token);

            if (!isValidToken.isAuth) {
                const { unauthorized } = userResponses;

                return res
                    .status(unauthorized.status)
                    .json(generate(unauthorized, { error: true }));
            }

            req.authState = isValidToken;

            return next();
        } else {
            if (!isValidAuthorization(authorization)) {
                req.authState = {
                    isAuth: false,
                    userId: null
                }
                return next();
            }

            const token = authorization.split(" ")[1];

            req.authState = verifyToken(token);

            next();
        }
    }
}

function verifyToken(token) {
    let authState = {};
    jwt.verify(token, authConfig.secret, (error, decoded) => {
        if (error) {
            return authState = {
                isAuth: false,
                userId: null
            }
        }
        return authState = {
            isAuth: true,
            userId: decoded.id
        }
    });
    return authState;
}
function isValidAuthorization(authorization) {
    if (!authorization)
        return false;

    const parts = authorization.split(" ");

    if (parts.length !== 2)
        return false;

    const [scheme, token] = parts;

    if (!/^Bearer$/.test(scheme))
        return false;

    return true;
}

module.exports = middleware;