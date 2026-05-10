const winston = require("winston")

const logger = winston.createLogger({
    level: "info",
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.simple(),
    ),
    defaultMeta: { service: "post-flow" },
    transports: [new winston.transports.Console()],
})

module.exports = logger
