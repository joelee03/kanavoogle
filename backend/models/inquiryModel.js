const mongoose = require('mongoose')

const Schema = mongoose.Schema

const inquirySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    service: {
        type: String,
        required: true 
    },
    details: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Inquiry', inquirySchema)