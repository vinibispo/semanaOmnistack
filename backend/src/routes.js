const {Router} = require('express')
const route = Router()
const DevController = require('./controllers/DevController')
route.post('/devs', DevController.store)
module.exports = route