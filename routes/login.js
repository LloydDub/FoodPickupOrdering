const express = require("express");
const router = express.Router();

module.exports = function (db) {
  // if email or password fields are blank
  // returns true
  // Otherwise, returns false.
  const checkBlankFields = function (req) {
    return req.body.loginEmail === "" || req.body.loginPassword === "";
  };
  // if email is in database
  // returns true
  // otherwise, returns false
  const checkCustomerEmail = function (req, data) {
    if (data.rows[0]) {
      return req.body.loginEmail === data.rows[0].email;
    }
  };
  // if password is in database
  // returns true
  // otherwise, returns false
  const checkCustomerPassword = function (req, data) {
    if (data.rows[0]) {
      return req.body.loginPassword === data.rows[0].password;
    }
  };

  /**
   * Endpoint ==> POST /login
   * localhost:8080/api/login/
   * handles a request for customer to log into app
   */
  router.post("/", function (req, res) {
    const query = `SELECT *
    FROM customers
    WHERE email = $1
    AND password = $2;`;

    const { loginEmail, loginPassword } = req.body;
    const params = [loginEmail, loginPassword];

    db.query(query, params)
      .then((data) => {
        // console.log(data.rows[0].id);
        // if customer email & password match
        if (checkBlankFields(req)) {
          return res.json("email and password field cannot be left blank");
        }

        if (checkCustomerPassword(req, data) && checkCustomerEmail(req, data)) {
          // set cookie
          req.session.userId = data.rows[0].id;
          res.redirect("/")
        } else {
          // otherwise, display "incorrect username/password"
          res.json("Incorrect email or password");
        }
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  return router;
};
