const express = require('express');
const router  = express.Router();

module.exports = function(db) {

  /**
  * Endpoint ==> GET /customers
  * localhost:8080/api/customers/
  * returns an JSON object of all customers with their information
  */
  router.get("/", function(req, res) {
    db
      .query(`SELECT * FROM users`)
      .then(data => {
        const users = data.rows;
        res.json({ users });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });


  /**
  * Endpoint ==> POST /customers
  * localhost:8080/api/customers/
  * handles a request to add an individual customer to db
  */
  router.post("/", function(req, res) {
    const inputName = req.body.name;
    const params = [inputName]
    const query = `INSERT INTO users (name) VALUES ($1)`;

    db
      .query(query, params)
      .then(res.redirect('/'))
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

return router;
}
