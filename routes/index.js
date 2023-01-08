const routes = require("express").Router();
const data = require("../controllers/");

routes.get("/", data.displayData);

module.exports = routes;
