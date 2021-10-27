const express = require("express");
const router = express.Router();

module.exports = function (db) {
  /**
   * Endpoint ==> GET /tickets
   * localhost:8080/api/tickets/
   * returns an JSON object of all tickets
   */
  router.get("/", function (req, res) {
    let userID = req.session.userId;
    const params = [userID];
    const query = `SELECT * FROM tickets WHERE customer_id = $1`;

    db.query(query, params)
      .then((data) => {
        const tickets = data.rows[0];
        res.json({ tickets });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  /**
   * Endpoint ==> GET /tickets/:id
   * localhost:8080/api/tickets/:id
   * returns a specific ticket
   */
  router.get("/:id", function (req, res) {
    let ticketId = req.params.id;
    const params = [ticketId];
    const query = `SELECT * FROM tickets WHERE id = $1`;

    db.query(query, params)
      .then((data) => {
        const tickets = data.rows;
        res.json({ tickets });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  return router;
};
