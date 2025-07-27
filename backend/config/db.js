import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);

    if (!connection) {
      throw new Error("Invalid URL");
    }

    console.log("Succesfully connected to db:", connection.connection.host);
  } catch (error) {
    console.error("Error connecting to DB");
    process.exit(1);
  }
};
