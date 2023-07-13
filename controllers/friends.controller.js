const model = require("../models/friends.models.js");


function getFriends(req, res) {
  res.json(model);
}

function postFriends(req, res) {
  if (!req.body.name) {
    return res.status(400).json({
      error: "Missing friend name",
    });
  }
  const newFriend = {
    id: model.length,
    name: req.body.name,
  };
  model.push(newFriend);
  res.json(newFriend);
}

function getFriend(req, res) {
  const friendId = Number(req.params.friendId);
  const friend = model[friendId];
  if (friend) {
    res.json(friend);
  } else {
    res.status(404).json({
      error: "Friend does not exist </3 ",
    });
  }
}

module.exports = {
  getFriends,
  postFriends,
  getFriend,
};
