import mongoose from "mongoose";
import Item from "./Item.model.js"

const beautySchema = new mongoose.Schema({
  brand: {
    type: String,
    required: true,
  },
  volume: {
    type: String,
    required: true,
  },
  ingredients: {
    type: [String],
    required: true
  }
}, {timestamps: true})

export default Item.discriminator("Beauty", beautySchema)