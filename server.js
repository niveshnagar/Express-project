const express = require("express");
const friendsRouter = require("./routers/friends.router.js");
const messagesRouter = require("./routers/messages.router.js");

// making server;
const app = express();
const PORT = 3000;

// middlewares;
app.use((req, res, next) => {
  const start = Date.now();
  console.log(`Recieved a: ${req.method} request at: ${req.baseUrl}${req.url}`);
  next();
  const delta = Date.now() - start;
  console.log(`Completed request in: ${delta}ms`);
});

app.use(express.json());

// route - "/" hello
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// route middlewares;
app.use("/friends", friendsRouter);
app.use("/messages", messagesRouter);

// listening on a specific port
app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});
