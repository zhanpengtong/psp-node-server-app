import schema from "./schema.js";
import mongoose from "mongoose";
const model = mongoose.model("items", schema);
export default model;

// Path: items/schema.js