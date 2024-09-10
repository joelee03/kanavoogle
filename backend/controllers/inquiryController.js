const Inquiry = require('../models/inquiryModel');
const nodemailer = require('nodemailer');
require('dotenv').config();

// create an inquiry
const postBInquiry = async (req, res) => {
    const { project, name, email, phone, details } = req.body;

    try {
        const inquiry = await Inquiry.create({
            project,
            name,
            email,
            phone,
            details,
        });

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
            to: 'blockchain@kanavoo.live',
            subject: 'New Inquiry Submitted',
            text: `
                A new inquiry has been submitted with the following details:
                
                Project: ${project}
                Name: ${name}
                Email: ${email}
                Phone: ${phone}
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

// create an inquiry
const postSInquiry = async (req, res) => {
    const { project, name, email, phone, details } = req.body;

    try {
        const inquiry = await Inquiry.create({
            project,
            name,
            email,
            phone,
            details,
        });

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
            to: 'Skills@kanavoo.live',
            subject: 'New Inquiry Submitted',
            text: `
                A new inquiry has been submitted with the following details:
                
                Project: ${project}
                Name: ${name}
                Email: ${email}
                Phone: ${phone}
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

// create an inquiry
const postMInquiry = async (req, res) => {
    const { project, name, email, phone, details } = req.body;

    try {
        const inquiry = await Inquiry.create({
            project,
            name,
            email,
            phone,
            details,
        });

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
            to: 'Montessori@kanavoo.live',
            subject: 'New Inquiry Submitted',
            text: `
                A new inquiry has been submitted with the following details:
                
                Project: ${project}
                Name: ${name}
                Email: ${email}
                Phone: ${phone}
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
    postBInquiry,
    postSInquiry,
    postMInquiry,
    getInquiries
};
