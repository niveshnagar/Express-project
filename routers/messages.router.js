const express = require("express");
const messagesController = require("../controllers/messages.controller");
const messagesRouter = express.Router();

// route - "/messages"
messagesRouter.get("/", messagesController.getMessages);
messagesRouter.post("/", messagesController.postMessages);

module.exports = messagesRouter;
