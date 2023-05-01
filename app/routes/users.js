const { listUsers, addUser } = require("../controllers/users.controller");

async function routes(fastify, options) {
  fastify.get("/users", listUsers);
  fastify.post("/users", addUser);
}
module.exports = routes;