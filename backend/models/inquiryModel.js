const mongoose = require('mongoose')

const Schema = mongoose.Schema

const inquirySchema = new Schema({
    project: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: false
    },
    details: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Inquiry', inquirySchema)