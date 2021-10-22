const express = require('express');
const router  = express.Router();

module.exports = function(db) {

  /**
  * Endpoint ==> GET /status
  * localhost:8080/api/status/
  * returns a JSON object containing a the "status" of the server
  */
  router.get("/", function(req, res) {
    db
      .query(``)
      .then(() => {
        const status = {
          status: 'ok'
        }
        res.json(status)
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

return router;
}
