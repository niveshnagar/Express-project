const express = require("express");

const app = express();
const PORT = 3000;

const friends = [
  {
    id: 0,
    name: "Nikola Tesla",
  },
  {
    id: 1,
    name: "Sir Issac Newton",
  },
  {
    id: 2,
    name: "Albert Einstein",
  },
  {
    id: 3,
    name: "Stephen Hawking",
  },
];

// "/" route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// "/friends" route
app.get("/friends", (req, res) => {
  res.json(friends);
});

app.get("/friends/:friendId", (req, res) => {
  const friendId = Number(req.params.friendId);
  const friend = friends[friendId];
  if (friend) {
    res.json(friend);
  }else{
    res.status(404).json({
      error: "Friend does not exist </3 ",
    })
  }
});

app.get("/messages", (req, res) => {
  res.send("<ul><li>Hello albert!</li></ul>");
});

app.post("/messages", (req, res) => {
  res.send("updating messages");
});

app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});
