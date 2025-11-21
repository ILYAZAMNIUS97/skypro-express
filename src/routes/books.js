const { Router } = require("express");
const {
  getBooks,
  getBookById,
  updateBookById,
  deleteBookById,
} = require("../controllers/bookController");
const validateObjectId = require("../middlewares/validateObjectId");

const router = Router();

router.get("/", getBooks);
router.get("/:id", validateObjectId, getBookById);
router.put("/:id", validateObjectId, updateBookById);
router.delete("/:id", validateObjectId, deleteBookById);

module.exports = router;
