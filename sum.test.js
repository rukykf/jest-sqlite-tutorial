const db = require("./db-config")

beforeAll(async () => {
  // run the migrations and do any other thing here
  await db.migrate.latest()
})

test("select users", async () => {
  let users = await db.from("users").select("name")
  expect(users.length).toEqual(0)
})