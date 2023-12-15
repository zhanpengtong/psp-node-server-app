import mongoose from "mongoose";
const schema  = new mongoose.Schema({
    seller : {type: mongoose.Schema.Types.ObjectId, ref: "users"},
    itemName: String,
    Price: Number,
    description: String,
    category: String,
    image: String,
  }, { collection: "items" });
export default schema;