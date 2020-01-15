if(process.env.NODE_ENV !== "production") {
    require('dotenv').config({path: '.env'}
    )}
const mongoose = require('mongoose')
const express = require('express')
const routes = require('./routes')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(routes)
app.use(cors())
mongoose.connect(process.env.MYURL, {useNewUrlParser: true, useUnifiedTopology: true})

app.listen(3333)
