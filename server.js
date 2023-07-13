const express = require("express");
const friendsController = require("./controllers/friends.controller.js");
const messagesController = require("./controllers/messages.controller.js");

// making server
const app = express();
const PORT = 3000;

// middlewares
app.use((req, res, next) => {
  const start = Date.now();
  console.log(`Recieved a: ${req.method} request at: ${req.url}`);
  next();
  const delta = Date.now() - start;
  console.log(`Completed request in: ${delta}ms`);
});

app.use(express.json());

// route - "/"
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// route - "/friends"
app.get("/friends", friendsController.getFriends);
app.post("/friends", friendsController.postFriends);
app.get("/friends/:friendId",friendsController.getFriend);

// route - "/messages"
app.get("/messages", messagesController.getMessages);
app.post("/messages", messagesController.postMessages);

// listening on a specific port
app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});
