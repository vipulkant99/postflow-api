require("dotenv").config()
const app = require("./app")
const config = require("./config")
const { pool } = require("./db")
const logger = require("./helpers/logger")

const PORT = config.port

app.listen(PORT, async () => {
    logger.info(`Server is running on port ${PORT}`)
    try {
        await pool.query("SELECT 1")
        logger.info("Database connected successfully")
    } catch (error) {
        logger.error("Database connection failed:", error)
    }
})
