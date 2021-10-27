const express = require('express');
const router  = express.Router();
const request = require('request');

module.exports = function(db) {

  /**
  * Endpoint ==> GET /sms
  * localhost:8080/sms
  * sends a sms to customer when order is complete
  */
  router.get("/", function(req, res) {
    request.post('https://textbelt.com/text', {
      form: {
        phone: '1234567890',
        message: 'Your food is ready!',
        key: 'f751f02d43ddb5027e239875b6394331fb45e3d8AXoUL1dlGMMKEipRSfqcEyCps',
      },
    },
    (err, httpResponse, body) => {
        if (err) {
          return (console.log(err));
        }
        console.log(JSON.parse(body))
        res.send('sent');
      });
    })

return router;
}
