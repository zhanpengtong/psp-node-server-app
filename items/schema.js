import mongoose from "mongoose";
const schema  = new mongoose.Schema({
    itemName: String,
    Price: Number,
    description: String,
    category: String,
  }, { collection: "items" });
export default schema;