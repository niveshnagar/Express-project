const express = require("express");
const path = require("path");
const friendsRouter = require("./routers/friends.router.js");
const messagesRouter = require("./routers/messages.router.js");

// making server;
const app = express();
const PORT = 3000;

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

// middlewares;
app.use((req, res, next) => {
  const start = Date.now();
  console.log(`Recieved a: ${req.method} request at: ${req.baseUrl}${req.url}`);
  next();
  const delta = Date.now() - start;
  console.log(`Completed request in: ${delta}ms`);
});

app.use("/site", express.static(path.join(__dirname, "public")));
app.use(express.json());

// route - "/"
app.get("/", (req, res) => {
  res.render("index", {
    title: "First website on my server",
    caption: "Chester! <3",
  });
});

// route middlewares;
app.use("/friends", friendsRouter);
app.use("/messages", messagesRouter);

// listening on a specific port
app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});
