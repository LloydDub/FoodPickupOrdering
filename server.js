// load .env data into process.env
require("dotenv").config();

// Web server config
const PORT = process.env.PORT || 8080;
const sassMiddleware = require("./lib/sass-middleware");
const express = require("express");
const app = express();
const morgan = require("morgan");
const cookieSession = require("cookie-session");

// use cookie middleware for sessions``
app.use(
  cookieSession({
    name: "session",
    keys: ["key1"],
  })
);

// PG database client/connection setup
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);
db.connect();

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan("dev"));

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use(
  "/styles",
  sassMiddleware({
    source: __dirname + "/styles",
    destination: __dirname + "/public/styles",
    isSass: false, // false => scss, true => sass
  })
);

app.use(express.static("public"));

// Separated Routes for each Resource
const status = require("./routes/status");
const customers = require("./routes/customers");
const login = require("./routes/login");
const menu_items = require("./routes/menu_items");
const tickets = require("./routes/tickets");
const locations = require("./routes/locations");
const logout = require("./routes/logout");
const controlPanel = require("./routes/control_panel");

// Mount all resource routes
app.use("/api/status", status(db));
app.use("/api/customers", customers(db));
app.use("/login", login(db));
app.use("/api/menu_items", menu_items(db));
app.use("/api/tickets", tickets(db));
app.use("/api/locations", locations(db));
app.use("/logout", logout(db));
app.use("/control_panel", controlPanel(db));

function parseCookies(request) {
  var list = {},
    rc = request.headers.cookie;

  rc &&
    rc.split(";").forEach(function (cookie) {
      var parts = cookie.split("=");
      list[parts.shift().trim()] = decodeURI(parts.join("="));
    });

  return list;
}

// Home page
app.get("/", (req, res) => {
  templateVars = {
    user: req.session.userId,
  };
  res.render("index", templateVars);
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
