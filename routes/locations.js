const express = require('express');
const router  = express.Router();

module.exports = function(db) {

  /**
  * Endpoint ==> GET /locations
  * localhost:8080/api/locations/
  * returns an JSON object of all restaurant locations
  */
  router.get("/", function(req, res) {
    db
      .query(`SELECT * FROM locations`)
      .then(data => {
        const locations = data.rows;
        res.json({ locations });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  /**
  * Endpoint ==> GET /locations/:id
  * localhost:8080/api/locations/:id
  * returns a specific restaurant's information given their id
  */
   router.get("/:id", function(req, res) {
    let locationId = req.params.id;
    const params = [locationId];
    const query = `SELECT * FROM locations WHERE id = $1`;

    db
      .query(query, params)
      .then(data => {
        const locations = data.rows;
        res.json({ locations });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

return router;
}
