const routes = require("express").Router();
const data = require("../controllers/");

const myController = require("../controllers");

routes.get("/", data.displayData);
routes.get("/mongoData", myController.getMongoData);

module.exports = routes;
