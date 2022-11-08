import dotenv from 'dotenv';
import server from './server';

dotenv.config();

async function start() {
    const fastify = await server();

    fastify.listen({ port: 5000, host: '0.0.0.0' }, function (err, address) {
        if (err) {
            fastify.log.error(err);
            process.exit(1);
        } else {
            fastify.log.info(`Fastify server listening on ${address}`);
        }
    });
}

start();