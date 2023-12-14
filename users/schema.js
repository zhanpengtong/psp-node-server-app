import mongoose from "mongoose";
const schema  = new mongoose.Schema({
    firstName: String,
    lastName: String,
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: String,
    phoneNumber: String,
    role: {
      type: String,
      enum: ["SELLER", "ADMIN", "USER"],
      default: "USER" },
    sellerItem: Array,
    cartItem: Array,
  },
  { collection: "users" });
export default schema;