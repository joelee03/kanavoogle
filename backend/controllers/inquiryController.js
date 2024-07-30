const Inquiry = require('../models/inquiryModel');
const authenticate = require('../middleware/authMiddleware');

const postInquiry = async (req, res) => {
    const { name, email, service, details } = req.body;

    try {
        const inquiry = await Inquiry.create({
            name,
            email,
            service,
            details,
            user: req.userId
        });
        res.status(200).json(inquiry);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getInquiries = async (req, res) => {
    try {
        const userInquiries = await Inquiry.find({ user: req.userId }).sort({ createdAt: -1 });
        res.status(200).json(userInquiries);
    } catch {
        res.status(500).send('Server Error');
    }
};

module.exports = {
    postInquiry,
    getInquiries
};
