const express = require("express");
const router = express.Router();

module.exports = function (db) {
  /**
   * Endpoint ==> GET /customers
   * localhost:8080/api/customers/
   * returns an JSON object of all customers with their information
   */
  router.get("/", function (req, res) {
    db.query(`SELECT * FROM customers`)
      .then((data) => {
        const customers = data.rows;
        res.json({ customers });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  /**
   * Endpoint ==> POST /customers
   * localhost:8080/api/customers/
   * handles a request to add an individual customer to db
   */
  router.post("/", function (req, res) {
    const inputName = req.body.name;
    const params = [inputName];
    const query = `INSERT INTO customers (name) VALUES ($1)`;

    db.query(query, params)
      .then(res.redirect("/"))
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  /**
   * Endpoint ==> GET /customers/:id
   * localhost:8080/api/customers/:id
   * returns a specific customer given their customer id
   */
  router.get("/:id", function (req, res) {
    let customerId = req.params.id;
    const params = [customerId];
    const query = `SELECT * FROM customers WHERE id = $1`;

    db.query(query, params)
      .then((data) => {
        const customers = data.rows;
        res.json({ customers });
        console.log("cvccv", data.rows);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  return router;
};
