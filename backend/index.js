const express = require('express');
const app = express();
require('dotenv').config(); // Load environment variables from .env file

const sendEmailsFromCSV = require('./components/emailSender');

app.use(express.json());

// Example route for triggering email sending from CSV
app.get('/send-emails', (req, res) => {
  const csvFilePath = 'Book1.csv';
  sendEmailsFromCSV(csvFilePath);
  res.send('Email sending initiated.');
});

// Start the server
const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
