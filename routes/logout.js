const express = require("express");
const router = express.Router();

module.exports = function () {

  router.post("/", function(req, res) {
    req.session = null;
    res.json("User Successfully logged out")
  });

  return router;
}
