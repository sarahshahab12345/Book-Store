import Book from "../models/book-model.js";

//==========    * GET ALL BOOKS *    ==========
const getAllBooks = async (req, res) => {
  const allBooks = await Book.find();

  res.status(200).json({
    status: "success",
    data: {
      count: allBooks.length,
      books: allBooks,
    },
  });
};

//==========    * GET BOOK BY ID *    ==========
const getBookById = async (req, res) => {
  const book = await Book.findById(req.params.id);

  if (book) {
    res.status(200).json({
      status: "success",
      data: book,
    });
  } else {
    res.status(404).json({
      status: "error",
      message: "Book not found",
    });
  }
};

//==========    * CREATE BOOK *    ==========
const createBook = async (req, res) => {
  const { title, price, author } = req.body;

  if (!title || !price || !author) {
    res.status(400);
    throw new Error("All Fields Are Required.");
  }

  const createdbook = await Book.create({
    title,
    price,
    author,
  });

  if (createdbook) {
    res.status(201).json({
      status: "success",
      data: {
        _id: createdbook._id,
      },
    });
  } else {
    res.status(400).json({
      status: "error",
      message: "Failed to Create Book",
    });
  }
};

//==========    * DELETE BOOK BY ID *    ==========
const deleteBookById = async (req, res) => {
  const bookToBeDeleted = await Book.findById(req.params.id);

  if (bookToBeDeleted) {
    await Book.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
      message: "Book Deleted Successfully",
      _id: bookToBeDeleted._id,
    });
  } else {
    res.status(404).json({
      status: "error",
      message: "Book not found",
    });
  }
};

//==========    * UPDATE BOOK BY ID *    ==========
const updateBookById = async (req, res) => {
  const { title, price, author } = req.body;

  if (!title || !author || !price) {
    res.status(400);
    throw new Error("All Fields Are Required");
  }

  const bookToBeUpdated = await Book.findById(req.params.id);

  if (bookToBeUpdated) {
    await Book.findByIdAndUpdate(req.params.id, {
      title,
      price,
      author,
    });
    res.status(200).json({
      status: "success",
      message: "Book Updated successfully",
      _id: bookToBeUpdated._id,
    });
  } else {
    res.status(404).json({
      status: "error",
      message: "Book not found",
    });
  }
};
export { getAllBooks, getBookById, createBook, updateBookById, deleteBookById };
