import Item from "../models/Item.model.js";

export const createItem = async (req, res) => {
  try {
    const { category } = req.body;

    if (!category) {
      return res.status(400).json({ message: "Category is required" });
    }

    const ItemModel = Item.discriminators[category];

    if (!ItemModel) {
      return res.status(400).json({ message: "Invalid category type" });
    }

    const newItem = await ItemModel.create(req.body);

    res.status(201).json(newItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getAllItems = async (req, res) => {
  try {
    const allItems = await Item.find({})    

    if(!allItems) {
      throw new Error("Not found Items")
    }

    res.status(200).json(allItems)
  } catch (error) {
    res.status(500).json({message: "Internal server error", error})
  }
}

export const getItemById = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id)

    if(!item) {
      throw new Error("Invalid ID")
    }
    res.status(200).json(item)
  } catch (error) {
    res.status(500).json({message:"Internal server error", error})
  }
}