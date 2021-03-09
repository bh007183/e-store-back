
const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./models");
// Sets up the Express App

var PORT = process.env.PORT || 8080;

// Requiring our models for syncing

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// var corsOptions = {
//   origin: 'https://l-z-mount-bjh.herokuapp.com'
// }
// corsOptions
app.use(cors());
// Static directory
app.use(express.static("public"));
/////////////////////////////////

// Routes
// =============================================================
require("./routes/admin-routes.js")(app);
require("./routes/cart-routes.js")(app);
require("./routes/customer-routes.js")(app);
require("./routes/product-routes.js")(app);


// Syncing our sequelize models and then starting our Express app
// =============================================================

// Change force: to true if it's cool for the site to remove database items.
db.sequelize.sync({ force: false }).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT http://localhost:" + PORT);
  });
});
