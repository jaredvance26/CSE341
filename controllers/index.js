const mongodb = require("../db/connection");

displayData = (req, res) => {
  const data = "Jared Vance";
  res.status(200).send(data);
};

const getMongoData = async (req, res, next) => {
  const result = await mongodb.getDb().db().collection("user").find();
  result.toArray().then((lists) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(lists);
  });
};

module.exports = {
  displayData,
  getMongoData,
};
