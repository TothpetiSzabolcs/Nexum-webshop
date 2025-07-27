import mongoose from "mongoose";
import Item from "./Item.model.js"

const clothingSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: true,
  },
  sizes: {
    type: [String],
    enum : ["S", "M", "L", "XL", "XXL"],
    required: true,
  },
  colors: {
    type: [String],
    required:true
  }
},{timestamps:true})

export default Item.discriminator("Clothing", clothingSchema)