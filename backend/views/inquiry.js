const express = require('express')
const {
    postInquiry,
    getInquiries
} = require('../controllers/inquiryController')
const router = express.Router()

router.post('/inquiry-post', postInquiry)

//get inquiry 
router.get('/get-inquiry', getInquiries)

module.exports = router
