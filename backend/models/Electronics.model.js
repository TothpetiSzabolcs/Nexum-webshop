import mongoose from "mongoose";
import Item from "./Item.model.js"

const electronicSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: true,
  },
  batteryLife: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true
  },
  warranty: {
    type: String,
    required: true
  }
}, {timestamps: true})

export default Item.discriminator("Electronics", electronicSchema)