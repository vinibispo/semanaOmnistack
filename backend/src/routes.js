const {Router} = require('express')
const axios = require('axios')
const route = Router()
const Dev = require('./models/Dev')
const stringToArray = require('./utils/index')
route.post('/devs', async (request, response) =>{
    const {github_username, techs, longitude, latitude} = request.body
    const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`)
    const {name = login, avatar_url, bio} = apiResponse.data
    const techArray = stringToArray(techs)
    const location = {
        type: 'Point',
        coordinates: [longitude, latitude]
    }
    const dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: techArray,
        location
    })
    return response.json(dev)
})
module.exports = route