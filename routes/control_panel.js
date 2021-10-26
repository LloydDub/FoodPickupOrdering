const express = require('express');
const router  = express.Router();

module.exports = function(db) {

  /**
  * Endpoint ==> GET /control_panel
  * localhost:8080/api/control_panel/
  * redirects admin to control panel page
  */
  router.get("/", function(req, res) {
    res.render("control_panel");
  });

return router;
}
