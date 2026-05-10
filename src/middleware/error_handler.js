function errorHandler(err, req, res, next) {
    console.log(err)

    res.status(err.statusCode || 500).json({
        status: err.statusCode || 500,
        message: err.message || "Internal server error",
    })
}

module.exports = errorHandler
