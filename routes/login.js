const express = require('express');
const router  = express.Router();

module.exports = function(db) {

  /**
  * Endpoint ==> POST /login
  * localhost:8080/api/login/
  * handles a request for customer to log into app
  */
  router.post("/", function(req, res) {
    const query = `SELECT email, password
    FROM customers
    WHERE email = $1
    AND password = $2;`;

    const email = req.body.loginEmail;
    const password = req.body.loginPassword;
    const params = [email, password];

    console.log('req.body.loginPassword ===', req.body.loginPassword);
    console.log('req.body.email ===', req.body.loginEmail);
    // if email and password matches database's email and password
      // login user
    // otherwise, do not login user and display error.


    db
      .query(query, params)
      .then(data => {
        const customer = data.rows
        res.json(customer[0].email);
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

return router;
}
