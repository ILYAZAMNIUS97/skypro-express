const express = require("express");
const usersRouter = require("./routes/users");
const booksRouter = require("./routes/books");
const notFound = require("./middlewares/notFound");
const errorHandler = require("./middlewares/errorHandler");

const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.use("/api/users", usersRouter);
app.use("/api/books", booksRouter);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
