
exports.up = function(knex) {
  knex.schema
      .createTable("users", (table) => {
        table.increments("id")
        table.string("name")
      })
      .then(() => {
        console.log("created users")
      })
};

exports.down = function(knex) {
  knex.schema.dropTable("users").then(() => {
    console.log("dropped users")
  })
};
