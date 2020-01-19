if(process.env.NODE_ENV !== "production") {
    require('dotenv').config({path: '.env'}
    )}
const mongoose = require('mongoose')
const http = require('http')
const express = require('express')
const routes = require('./routes')
const {setupWebSocket} = require('./websocket')
const cors = require('cors')
const app = express()
const server = http.Server(app)
setupWebSocket(server)
app.use(cors())
app.use(express.json())
app.use(routes)
mongoose.connect(process.env.MYURL, {useNewUrlParser: true, useUnifiedTopology: true})

server.listen(3333)
