const { createCache } = require('async-cache-dedupe')

const cache = createCache({
    ttl: 5, // seconds
    stale: 5, // number of seconds to return data after ttl has expired
    storage: { type: 'memory' },
})
module.exports = { cache }