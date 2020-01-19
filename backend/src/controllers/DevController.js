const axios = require('axios')
const Dev = require('../models/Dev')
const stringToArray = require('../utils/parseStringAsArray')
const {findConnection, sendMessage} = require('../websocket')

module.exports = {
    async index(req, res){
        const devs = await Dev.find()
        return res.json(devs)
    },
   async store(request, response) {
        const {github_username, techs, longitude, latitude} = request.body
        let dev = await Dev.findOne({github_username})
        if(!dev){
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`)
            const {name = login, avatar_url, bio} = apiResponse.data
            const techArray = stringToArray(techs)
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude]
            }
           dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techArray,
                location
            })
            const sendSocketMessageTo = findConnection({
                latitude, longitude
            }, techArray)
            sendMessage(sendSocketMessageTo, 'new-dev', dev)
        }
                return response.json(dev)
    },
    async update(req, res){
        const {id} = req.params
        const {techs} = req.body
        const techArray = stringToArray(techs)
        const dev = await Dev.findByIdAndUpdate(id, {
            techs: techArray
        })
        res.send(dev)
    },
    async destroy(req, res){
        const {id} = req.params
        const dev = await Dev.findByIdAndRemove(id)
    }
}