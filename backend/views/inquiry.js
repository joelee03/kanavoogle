const express = require('express')
const {
    postBInquiry,
    postMInquiry,
    postSInquiry,
    getInquiries
} = require('../controllers/inquiryController')
const router = express.Router()

//submit an inquiry 
router.post('/blockchain', postBInquiry)
router.post('/montessori', postMInquiry)
router.post('/skills', postSInquiry)

//get an inquiry 
router.get('/', getInquiries)

module.exports = router
