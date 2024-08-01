const express = require('express')
const {
    postInquiry,
    getInquiries
} = require('../controllers/inquiryController')
const router = express.Router()

//submit an inquiry 
router.post('/', postInquiry)

//get an inquiry 
router.get('/', getInquiries)

module.exports = router
