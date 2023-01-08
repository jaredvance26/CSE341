displayData = (req, res) => {
  const data = "The webserver is working";
  res.status(200).send(data);
};

module.exports = {
  displayData,
};
