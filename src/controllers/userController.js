const User = require("../models/User");
const asyncHandler = require("../utils/asyncHandler");

const pickUserFields = ({ firstName, lastName, username }) => ({
  ...(firstName !== undefined && { firstName }),
  ...(lastName !== undefined && { lastName }),
  ...(username !== undefined && { username }),
});

exports.getUsers = asyncHandler(async (req, res) => {
  const users = await User.find().lean();
  res.json({ data: users });
});

exports.getUserById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id).lean();

  if (!user) {
    const error = new Error("Пользователь не найден");
    error.status = 404;
    throw error;
  }

  res.json({ data: user });
});

exports.updateUserById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const update = pickUserFields(req.body);

  if (!Object.keys(update).length) {
    const error = new Error("Нет данных для обновления");
    error.status = 400;
    throw error;
  }

  const updatedUser = await User.findByIdAndUpdate(id, update, {
    new: true,
    runValidators: true,
  }).lean();

  if (!updatedUser) {
    const error = new Error("Пользователь не найден");
    error.status = 404;
    throw error;
  }

  res.json({ data: updatedUser });
});

exports.deleteUserById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const deletedUser = await User.findByIdAndDelete(id).lean();

  if (!deletedUser) {
    const error = new Error("Пользователь не найден");
    error.status = 404;
    throw error;
  }

  res.json({ data: deletedUser });
});
