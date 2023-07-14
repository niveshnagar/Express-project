const path = require("path");

function getMessages(req, res) {
  res.sendFile(path.join(__dirname, "..", "public","images", "chester.jpeg"));
}

function postMessages(req, res) {
  res.send("updating messages");
}
module.exports = {
  getMessages,
  postMessages,
};
