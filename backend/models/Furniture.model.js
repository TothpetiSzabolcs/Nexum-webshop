import mongoose from "mongoose";
import Item from "./Item.model.js"

const furnitureSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: true,
  },
  dimensions: {
    type: String,
    required: false
  },
  material: {
    type: String,
    required: true
  }
}, {timestamps: true})

export default Item.discriminator("Furniture", furnitureSchema)