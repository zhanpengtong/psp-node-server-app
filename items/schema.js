import { Double } from "mongodb";
import mongoose from "mongoose";
const schema  = new mongoose.Schema({
    itemName: String,
    Price: Number,
    description: String,
    category: String,
    reviews: Array [
        {
            username: String,
            review: String,
            rating: Double,
        }
    ],
  },
  { collection: "items" });
export default schema;