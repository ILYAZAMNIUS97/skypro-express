const express = require("express");
const cors = require("cors");
const usersRouter = require("./routes/users");
const booksRouter = require("./routes/books");
const notFound = require("./middlewares/notFound");
const errorHandler = require("./middlewares/errorHandler");
const logger = require("./middlewares/logger");

const app = express();

app.use(cors());
app.use(logger);
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.use("/api/users", usersRouter);
app.use("/api/books", booksRouter);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
