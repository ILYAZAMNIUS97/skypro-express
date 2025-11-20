const Book = require("../models/Book");
const asyncHandler = require("../utils/asyncHandler");

const pickBookFields = ({ title, author, year }) => ({
  ...(title !== undefined && { title }),
  ...(author !== undefined && { author }),
  ...(year !== undefined && { year }),
});

exports.getBooks = asyncHandler(async (req, res) => {
  const books = await Book.find().lean();
  res.json({ data: books });
});

exports.getBookById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const book = await Book.findById(id).lean();

  if (!book) {
    const error = new Error("Книга не найдена");
    error.status = 404;
    throw error;
  }

  res.json({ data: book });
});

exports.updateBookById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const update = pickBookFields(req.body);

  if (!Object.keys(update).length) {
    const error = new Error("Нет данных для обновления");
    error.status = 400;
    throw error;
  }

  const updatedBook = await Book.findByIdAndUpdate(id, update, {
    new: true,
    runValidators: true,
  }).lean();

  if (!updatedBook) {
    const error = new Error("Книга не найдена");
    error.status = 404;
    throw error;
  }

  res.json({ data: updatedBook });
});

exports.deleteBookById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const deletedBook = await Book.findByIdAndDelete(id).lean();

  if (!deletedBook) {
    const error = new Error("Книга не найдена");
    error.status = 404;
    throw error;
  }

  res.json({ data: deletedBook });
});
