const knex = require("knex")
const config = require("./knexfile")

let db = null
if (process.env.NODE_ENV === "test") {
  db = knex(config.test)
} else {
  db = knex(config.test)
}

module.exports = db
