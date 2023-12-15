import mongoose from "mongoose";
const schema  = new mongoose.Schema({
    seller : {type: mongoose.Schema.Types.ObjectId, ref: "users"},
    itemName: String,
    Price: Number,
    description: String,
    category: String,
    image: {type: String, default: "0"},
  }, { collection: "items" });
export default schema;