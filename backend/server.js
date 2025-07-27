import express from "express"
import "./models/Item.model.js";
import "./models/Clothing.model.js";
import "./models/Book.model.js";
import "./models/Beauty.model.js";
import "./models/Furniture.model.js";
import "./models/Electronics.model.js";
import cors from "cors"
import dotenv from "dotenv"
import { connectDB } from "./config/db.js"
import itemRoutes from "./routes/Items.route.js"


dotenv.config()

const PORT = process.env.PORT || 8080

const app = express()

app.use(express.json())
app.use(cors({origin: `http://localhost:5173`}))

app.use("/api", itemRoutes)

app.listen(PORT, () => {
  connectDB()

  console.log(`Server is running on: ${PORT}`);
  
})