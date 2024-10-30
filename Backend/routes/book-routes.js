import express from "express";
import {
  getAllBooks,
  getBookById,
  createBook,
  updateBookById,
  deleteBookById,
} from "../controllers/book-controller.js";

const router = express.Router();

// Route to get all books and create a new book
router.route("/").get(getAllBooks).post(createBook);

// Routes to get, update, and delete a book by ID
router
  .route("/:id")
  .get(getBookById)
  .delete(deleteBookById)
  .put(updateBookById);

export default router;
