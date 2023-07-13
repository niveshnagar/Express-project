const express = require("express");

// making server
const app = express();
const PORT = 3000;

// current friend database
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
app.get("/friends", (req, res) => {
  res.json(friends);
});

app.post("/friends", (req, res) => {
  if (!req.body.name) {
    return res.status(400).json({
      error: "Missing friend name",
    });
  }
    const newFriend = {
      id: friends.length,
      name: req.body.name,
    };
    friends.push(newFriend);
    res.json(newFriend);
  
});

// route - "friends/:friendId" (dynamic route)
app.get("/friends/:friendId", (req, res) => {
  const friendId = Number(req.params.friendId);
  const friend = friends[friendId];
  if (friend) {
    res.json(friend);
  } else {
    res.status(404).json({
      error: "Friend does not exist </3 ",
    });
  }
});

// route - "/messages"
app.get("/messages", (req, res) => {
  res.send("<ul><li>Hello albert!</li></ul>");
});

app.post("/messages", (req, res) => {
  res.send("updating messages");
});

// listening on a specific port
app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});
