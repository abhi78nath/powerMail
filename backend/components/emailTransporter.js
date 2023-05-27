const nodemailer = require('nodemailer');
require('dotenv').config();

// create and export the transporter object
const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  secure: false,
  auth: {
    user: process.env.USER,
    pass: process.env.PASS
  }
});

module.exports = transporter;
