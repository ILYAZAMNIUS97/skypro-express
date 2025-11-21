const { Router } = require("express");
const {
  getUsers,
  getUserById,
  updateUserById,
  deleteUserById,
} = require("../controllers/userController");
const validateObjectId = require("../middlewares/validateObjectId");

const router = Router();

router.get("/", getUsers);
router.get("/:id", validateObjectId, getUserById);
router.put("/:id", validateObjectId, updateUserById);
router.delete("/:id", validateObjectId, deleteUserById);

module.exports = router;
