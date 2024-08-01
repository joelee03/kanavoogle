const express = require('express')
const {
    postInquiry,
    getInquiries
} = require('../controllers/inquiryController')
const router = express.Router()

//submit an inquiry 
router.post('/inquiry-post', postInquiry)

//get an inquiry 
router.get('/get-inquiry', getInquiries)

module.exports = router
