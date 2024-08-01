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
    service: {
        type: String,
        enum: ['Novel Blockchain Projects', 'Gain 21st Century Skills', 'Implement Montessori Education'],
        required: true 
    },
    details: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Inquiry', inquirySchema)