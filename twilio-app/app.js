// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
const accountSid = 'ACbd2db1a9f1abc18d7473c9fc3a4e6b5d';
const authToken = require('./authToken').token;
const client = require('twilio')(accountSid, authToken);



client.messages
    .create({
        body: 'Hi there!',
        from: '+15625267865',
        to: '+17147263823'
    })
    .then(message => console.log(message.sid));