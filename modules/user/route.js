// @ts-check
const { list } = require("../user/services")
module.exports = async function (fastify) {
    fastify.get('/list', async (request, reply) => {

        // I am trying to implement it here with list function response but not sure how to do it

        const response = await list({ oFnBody: request?.query })
        return response
    })
}
