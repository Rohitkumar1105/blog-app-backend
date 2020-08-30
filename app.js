const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const url = 'mongodb://localhost/BlogDB'
const app = express()

mongoose.connect(url, { useNewUrlParser : true})
const con = mongoose.connection

con.on('open', () => {
    console.log('Connected')
})

app.use(cors())
app.use(express.json())

const blogRouter = require('./routes/blog')
app.use('/blogs', blogRouter)

app.listen(5000, () => {
    console.log('Server Started')
})
