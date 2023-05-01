const fastify = require("fastify")({ logger: true });
const dotenv = require("dotenv");

dotenv.config();

// Register MongoDB instance
fastify.register(require("fastify-mongodb"), {
  forceClose: true,
  url: process.env.CONNECT_DB,
});

// Register Routes
fastify.register(require("./app/routes/users"));

// Run the server!
fastify.listen({ port: 3000 }, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  // Server is now listening on ${address}
})