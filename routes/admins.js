const express = require("express");
const router = express.Router();

router.get("/admin", function (req, res) {
  res.render("../views/admin.ejs");
});
return router;
