const swagger = require("swagger-jsdoc")

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "PostFlow API",
            version: "1.0.0",
            description: "PostFlow API",
        },
    },
    apis: [
        "./src/routes/accounts/*.js",
        "./src/routes/ai/*.js",
        "./src/routes/auth/*.js",
        "./src/routes/posts/*.js",
    ],
}

module.exports = swagger(options)
