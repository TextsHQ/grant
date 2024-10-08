
var fastify = require('fastify')
var cookie = require('fastify-cookie')
var session = require('@fastify/session')
var grant = require('../../').fastify()


fastify()
  .register(cookie)
  .register(session, {secret: '01234567890123456789012345678912', cookie: {secure: false}})
  .register(grant(require('./config')))
  .route({method: 'GET', path: '/hello', handler: async (req, res) => {
    res.send(JSON.stringify(req.session.grant.response, null, 2))
  }})
  .route({method: 'GET', path: '/hi', handler: async (req, res) => {
    res.send(JSON.stringify(req.session.grant.response, null, 2))
  }})
  .listen(3000)
