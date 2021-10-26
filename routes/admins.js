const express = require("express");
const router = express.Router();

app.get("/admin", function (req, res) {
  res.sendFile("admin.ejs", { root: VIEWS });
});
