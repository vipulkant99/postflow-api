const express = require("express")
const cors = require("cors")
const helmet = require("helmet")
const morgan = require("morgan")
const errorHandler = require("./middleware/error_handler")
const swaggerUi = require("swagger-ui-express")
const swaggerConfig = require("./config/swagger")

const app = express()

// Middlewares
app.use(helmet({ contentSecurityPolicy: false }))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan("dev"))

// health check
app.get("/api/v1/health", (req, res) => {
    res.json({
        status: 200,
        message: "PostFlow API is running",
        timestamp: new Date().toISOString(),
    })
})

//swagger ui docs
app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerConfig))

app.use(errorHandler)

module.exports = app
