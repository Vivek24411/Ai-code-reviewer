const express = require('express')
const app = express()
const codeReviewRoute = require('./routes/codeReview.route')
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/code',codeReviewRoute)






module.exports = app