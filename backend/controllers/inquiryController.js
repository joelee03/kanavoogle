const Inquiry = require('../models/inquiryModel');
const nodemailer = require('nodemailer');
require('dotenv').config();

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

        // Define recipients based on the service type
        let recipientEmail;
        if (service === 'Novel Blockchain Projects') {
            recipientEmail = 'blockchain@kanavoo.live';
        } else if (service === 'Gain 21st Century Skills') {
            recipientEmail = 'Skills@kanavoo.live';
        } else if (service === 'Implement Montessori Education') {
            recipientEmail = 'Montessori@kanavoo.live';
        } else {
            recipientEmail = 'defaultemail@example.com'; // default email if none of the services match
        }

        // Setup Nodemailer transporter 
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        // Email options
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: recipientEmail,
            subject: 'New Inquiry Submitted',
            text: `
                A new inquiry has been submitted with the following details:
                
                Project: ${project}
                Name: ${name}
                Email: ${email}
                Service: ${service}
                Details: ${details}
            `
        };

         // Send email
         transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
            } else {
                console.log('Email sent:', info.response);
            }
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
