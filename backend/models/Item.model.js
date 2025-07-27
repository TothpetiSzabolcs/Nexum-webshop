import mongoose from "mongoose";

const itemShema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ["Clothing","Electronics", "Furniture", "Book", "Beauty"],
    required: true
  },
  price: {
    type: Number,
    min: 1000,
    required: true,
  },
  inStock: {
    type: Boolean,
    required: false,
    default: true
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
    default: "https://picsum.photos/200/300"
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  }
}, {
  discriminatorKey: "category",
  collection: "items",
  timestamps: true
})

export default mongoose.model("Item", itemShema)