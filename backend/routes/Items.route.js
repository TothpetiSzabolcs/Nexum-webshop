import express from "express";
import { createItem, getAllItems, getItemById } from "../controllers/items.controller.js";

const router = express.Router()

router.get("/all", getAllItems)
router.get("/items/:id", getItemById)
router.post("/create", createItem)

export default router