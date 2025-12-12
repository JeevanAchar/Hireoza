import Fastify from "fastify";

const fastify = Fastify({
  logger: true,
});

fastify.get("/", function (request, reply) {
  reply.send({
    hello: "world",
  });
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
fastify.listen({ port: 5000 }, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
