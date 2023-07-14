const express = require("express");
const friendsController = require("../controllers/friends.controller.js");
const friendsRouter = express.Router();

// route - "/friends"
friendsRouter.get("/", friendsController.getFriends);
friendsRouter.post("/", friendsController.postFriends);
friendsRouter.get("/:friendId", friendsController.getFriend);

module.exports = friendsRouter;