import bookService from "../services/bookService.js";

// Create Book
export const createBook = async (req, res) => {
  try {
    const book = await bookService.createBook(req.body);

    res.status(201).json({
      success: true,
      message: "Book created successfully",
      data: book,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
      data: null,
    });
  }
};

// Get All Books
export const findbook = async (req, res) => {
  try {
    const books = await bookService.getBooks();

    res.status(200).json({
      success: true,
      message: "Books fetched successfully",
      data: books,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
      data: [],
    });
  }
};

// Get Book by ID
export const getfindbyid = async (req, res) => {
  try {
    const book = await bookService.getfindbyid(req.params.id);

    if (!book) {
      return res.status(404).json({
        success: false,
        message: "Book not found",
        data: null,
      });
    }

    res.status(200).json({
      success: true,
      message: "Book fetched successfully",
      data: book,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
      data: null,
    });
  }
};

// Update Book
export const updatebooks = async (req, res) => {
  try {
    const book = await bookService.updatebook(req.params.id, req.body);

    if (!book) {
      return res.status(404).json({
        success: false,
        message: "Book not found",
        data: null,
      });
    }

    res.status(200).json({
      success: true,
      message: "Book updated successfully",
      data: book,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
      data: null,
    });
  }
};

// Delete Book
export const deletebook = async (req, res) => {
  try {
    const book = await bookService.deletebook(req.params.id);

    if (!book) {
      return res.status(404).json({
        success: false,
        message: "Book not found",
        data: null,
      });
    }

    res.status(200).json({
      success: true,
      message: "Book deleted successfully",
      data: book,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
      data: null,
    });
  }
};
