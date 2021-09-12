const Pool = require('pg').Pool


// const pool = new Pool({
//     user: "postgres",
//     password: "glen",
//     host: "localhost",
//     port: 5432,
//     database: "todolist"
// })

const pool = new Pool({
    user: process.env.PG_USER || "postgres",
    password: process.env.PG_PASSWORD || "glen",
    host: process.env.HOST || "localhost",
    port: process.env.PORT || 5432,
    database: process.env.DATABASE || "todolist" 
})

module.exports = pool