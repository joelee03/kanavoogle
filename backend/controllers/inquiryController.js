const Inquiry = require('../models/inquiryModel');
//const authenticate = require('../middleware/authMiddleware');

// create an inquiry
const postInquiry = async (req, res) => {
    const { project, name, email, service, details } = req.body;

    try {
        const inquiry = await Inquiry.create({
            project,
            name,
            email,
            service,
            details,
        });
        res.status(200).json(inquiry);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// retrieve all user inquiries
const getInquiries = async (req, res) => {
    try {
        const userInquiries = await Inquiry.find({}).sort({ createdAt: -1 });
        res.status(200).json(userInquiries);
    } catch {
        res.status(500).send('Server Error');
    }
};

module.exports = {
    postInquiry,
    getInquiries
};
