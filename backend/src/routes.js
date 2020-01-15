const {Router} = require('express')
const route = Router()
const DevController = require('./controllers/DevController')
route.get('/devs', DevController.index)
route.post('/devs', DevController.store)
module.exports = route