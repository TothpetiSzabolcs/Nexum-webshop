import mongoose from "mongoose";
import Item from "./Item.model.js"

const bookShema = new mongoose.Schema({
  author: {
    type: String,
    required: true,
  },
  publisher: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    required: true
  },
  pages: {
    type: Number,
    required: true,
    min: 1
  }
}, {timestamps: true})

export default Item.discriminator("Book", bookShema)