import schema from "./schema.js";
import mongoose from "mongoose";
const model = mongoose.model("reviews", schema);
export default model;

// Path: reviews/schema.js