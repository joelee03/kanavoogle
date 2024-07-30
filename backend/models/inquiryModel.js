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
        enum: ['Novel Blockchian Projects', 'Gain 21st Century Skills', 'Implement Montessori Education'],
        required: true 
    },
    details: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Inquiry', inquirySchema)