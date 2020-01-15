if(process.env.NODE_ENV !== "production") {
    require('dotenv').config({path: '.env'}
    )}
const mongoose = require('mongoose')
const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))
mongoose.connect(process.env.MYURL, {useNewUrlParser: true, useUnifiedTopology: true})



app.listen(3333)