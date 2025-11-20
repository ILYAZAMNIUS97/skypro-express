const mongoose = require("mongoose");

const connectDB = async () => {
  const { MONGODB_URI } = process.env;

  if (!MONGODB_URI) {
    throw new Error("Переменная окружения MONGODB_URI не задана");
  }

  await mongoose.connect(MONGODB_URI, {
    autoIndex: true,
  });

  return mongoose.connection;
};

module.exports = connectDB;
