function getMessages(req, res) {
  res.send("<ul><li>Hello albert!</li></ul>");
}

function postMessages(req, res) {
  res.send("updating messages");
}
module.exports = {
  getMessages,
  postMessages,
};
