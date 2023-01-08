displayData = (req, res) => {
  const data = "Jared Vance";
  res.status(200).send(data);
};

module.exports = {
  displayData,
};
