const {Router} = require('express')
const route = Router()
const DevController = require('./controllers/DevController')
const SearchController = require('./controllers/SearchController')
route.get('/devs', DevController.index)
route.post('/devs', DevController.store)
route.get('/search', SearchController.index)
module.exports = route