const errorHandler = (err, req, res, next) => {
  const status = err.status || 500;
  const isServerError = status === 500;

  if (process.env.NODE_ENV !== "test") {
    // eslint-disable-next-line no-console
    console.error(err);
  }

  res.status(status).json({
    status: "error",
    message: isServerError ? "Внутренняя ошибка сервера" : err.message,
  });
};

module.exports = errorHandler;
