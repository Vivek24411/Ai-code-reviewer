const express = require('express')
const router = express.Router()
const {query,body} = require('express-validator')
const { codeReview } = require('../controllers/codeReview.controller')

router.post('/codeReview',[
    body('code').isLength({min:3}).withMessage('give a code more than 2')
],codeReview)

module.exports = router