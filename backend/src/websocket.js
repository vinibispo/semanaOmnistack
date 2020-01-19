const socketio = require('socket.io')
const connections = []
const parseStringAsArray = require('./utils/index')
exports.setupWebSocket = (server) => {
    const io = socketio(server)
    io.on('connection', socket => {
        console.log(socket.id)
        const {latitude, longitude, techs} = socket.handshake.query
        connections.push({
            id: socket.id,
            coordinates:{
                latitude: Number(latitude),
                longitude: Number(longitude)
            },
            techs: parseStringAsArray(techs)
        })
    })
}