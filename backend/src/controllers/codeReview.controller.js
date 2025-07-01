const {validationResult} = require('express-validator')
const { codeReviewAI } = require('../utils/aiHelper')


module.exports.codeReview = async(req,res,next)=>{
    const error = validationResult(req)
    if(!error.isEmpty()){
        res.status(400).json({
            msg:error.array()
        })
    }
    const {code} = req.body
    
    
    console.log(req.body);
    
    console.log(code);
    
    const result = await codeReviewAI(code)
    res.status(200).json(result.response.text())

}