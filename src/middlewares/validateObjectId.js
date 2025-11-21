const mongoose = require("mongoose");

const validateObjectId = (req, res, next) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    const error = new Error("Некорректный идентификатор");
    error.status = 400;
    return next(error);
  }

  return next();
};

module.exports = validateObjectId;
