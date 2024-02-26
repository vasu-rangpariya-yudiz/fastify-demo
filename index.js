// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })
const autoLoad = require('@fastify/autoload')
const path = require('path')

// Declare a route
fastify.register(autoLoad, {
    dir: path.join(__dirname, 'plugins')
})

// Run the server!
fastify.listen({ port: 3000 }, (err) => {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
})