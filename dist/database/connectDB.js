"use strict";
const { Pool } = require('pg');
require("dotenv").config();
const itemsPool = new Pool({
    connectionString: process.env.POSTGRESQL_EXTERNAL_DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});
module.exports = itemsPool;
