require("dotenv").config();
const app = require("./app");
const connectDB = require("./config/db");

const PORT = process.env.PORT || 3005;

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      // eslint-disable-next-line no-console
      console.log(`REST API запущено на http://127.0.0.1:${PORT}`);
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Не удалось запустить сервер", error);
    process.exit(1);
  }
};

startServer();
