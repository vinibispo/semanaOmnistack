const mongoose = require('mongoose')
const Point = require('./utils/Points')
const DevSchema = new mongoose.Schema({
    name: String,
    github_username: String,
    bio: String,
    avatar_url: String,
    techs: [String],
    location:{
        type: Point,
        index: '2dsphere'
    }
})
module.exports = mongoose.model('Dev', DevSchema)