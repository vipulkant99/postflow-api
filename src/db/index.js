const { drizzle } = require("drizzle-orm/node-postgres")
const pg = require("pg")
const config = require("../config")

const pool = new pg.Pool({
    host: config.db_host,
    port: config.db_port,
    user: config.db_user,
    password: config.db_password,
    database: config.db_name,
})

const db = drizzle(pool)

module.exports = { db, pool }
