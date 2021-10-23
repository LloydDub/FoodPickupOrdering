const express = require('express');
const router  = express.Router();

module.exports = function(db) {

  /**
  * Endpoint ==> GET /menu_items
  * localhost:8080/api/menu_items/
  * returns an JSON object of all menu items
  */
  router.get("/", function(req, res) {
    const query = `SELECT * FROM menu_items`;

    db
      .query(query)
      .then(data => {
        const menu_items = data.rows;
        res.json({ menu_items });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

return router;
}
