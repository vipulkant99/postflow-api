const config = {
    // app config
    port: process.env.PORT || 3000,
    node_env: process.env.NODE_ENV || "development",

    // db config
    db_host: process.env.DB_HOST,
    db_port: process.env.DB_PORT,
    db_name: process.env.DB_NAME,
    db_user: process.env.DB_USER,
    db_password: process.env.DB_PASSWORD,
}

module.exports = config
