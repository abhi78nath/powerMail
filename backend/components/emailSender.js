const fs = require('fs');
const csv = require('csv-parser');
const validateEmail = require('./emailValidator');
const transporter = require('./emailTransporter');

function sendEmailsFromCSV(csvFilePath) {
  fs.createReadStream(csvFilePath)
    .pipe(csv())
    .on('data', (data) => {
      if (validateEmail(data.email)) {
        transporter.sendMail({
          from: '"Leon Chandler" <leonchandler555@gmail.com>',
          to: data.email,
          subject: 'Hello',
          text: 'Hello, this is a test email.'
        }, (error, info) => {
          if (error) {
            console.log(error);
          } else {
            console.log(`Email sent to ${String(data.email)}`);
          }
        });
      } else {
        console.log(`Invalid email: ${String(data.email)}`);
      }
    })
    .on('end', () => {
      console.log('Finished reading CSV file.');
    });
}

module.exports = sendEmailsFromCSV;
