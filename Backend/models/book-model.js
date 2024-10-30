import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
    },
    author: {
      type: String,
      required: [true, "Author is required"],
    },
    publicationDate: {
      type: Date,
      default: new Date(),
    },
  },
  {
    timestamps: true,  
  }
);

const Book = mongoose.model("Book", bookSchema); 

export default Book;
