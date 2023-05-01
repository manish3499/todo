
const ObjectID = require("mongodb").ObjectID;

async function listUsers(req, reply) {
  const users = this.mongo.db.collection("users");
  const result = await users.find({}).toArray();
  console.log(result);
  reply.send(result);
}

async function addUser(req, reply) {
  const users = this.mongo.db.collection("users");
  const { name, age } = req.body;
  const data = { name, age };
  const result = await users.insertOne(data);
  reply.code(201).send(result);
}

module.exports = { listUsers, addUser };