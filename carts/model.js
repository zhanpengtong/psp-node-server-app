import schema from "./schema.js";
import mongoose from "mongoose";
const model = mongoose.model("carts", schema);
export default model;

// Path: carts/model.js