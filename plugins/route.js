const fastifyPlugin = require('fastify-plugin')

module.exports = fastifyPlugin(async (fastify) => {
    fastify.register(require('../modules/user/route'), { prefix: 'api/v1/user' })
})
