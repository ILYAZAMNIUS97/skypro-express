const notFound = (req, res, next) => {
  const error = new Error("Ресурс не найден");
  error.status = 404;
  next(error);
};

module.exports = notFound;
