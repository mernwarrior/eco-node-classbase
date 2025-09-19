import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    publishedYear: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true, // createdAt & updatedAt
  }
);

const Book = mongoose.model("Book", bookSchema);
export default Book;
