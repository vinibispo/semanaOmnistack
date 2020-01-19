const socketio = require('socket.io')
const connections = []
const parseStringAsArray = require('./utils/parseStringAsArray')
const calculateDistance = require('./utils/calculateDistance')
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
exports.findConnection = (coordinates, techs)=>{
    return connections.filter((connection) =>(
        calculateDistance(coordinates, connection.coordinates) < 10
        && connection.techs.some(item => techs.includes())
    ))
}