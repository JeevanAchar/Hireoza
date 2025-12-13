import Fastify from "fastify";
import { config } from "./config";
import { connectMongoDB } from "./mongoConnect";

// Mongo connection
connectMongoDB();

const fastify = Fastify({
  logger: true,
});

fastify.get("/", function (request, reply) {
  reply.send({
    hello: "world",
  });
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
fastify.listen({ port: Number(config.port) }, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
