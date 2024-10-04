const nodemailer = require('nodemailer');
const fs = require('fs');

// Create a transporter using Gmail
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "ghattiganesh8@gmail.com",
    pass: "gecy jkfr fzmy dcwf",
  },
});

// Read the HTML template
const htmlTemplate = fs.readFileSync('index.html', 'utf-8');

// Configure the email options
const mailOptions = {
  from: '"ECL Admin" <ghattiganesh8@gmail.com>',
  to: 'ganeshghatti6@gmail.com', // Replace with the recipient's email
  subject: 'Thank You for Registering for ECL Season 2!',
  html: htmlTemplate,
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Error:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});