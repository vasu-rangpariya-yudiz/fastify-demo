// @ts-check
const { cache } = require("../../cache")
const { list } = require("../user/services")
module.exports = async function (fastify) {
    fastify.get('/list', async (request, reply) => {

        // I am trying to implement it here with list function response but not sure how to do it
        cache.define('getUserList', { ttl: 5000 }, async () => await list({ oFnBody: request?.query }))
        const cacheResponse = await cache.getUserList()
        console.log('cacheResponse', cacheResponse);
        // here when second request comes it throws an error

        // const response = await list({ oFnBody: request?.query })
        return cacheResponse
    })
}
