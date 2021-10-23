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

return router;
}
