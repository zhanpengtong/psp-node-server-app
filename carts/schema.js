import mongoose from "mongoose";
const schema = new mongoose.Schema(
    {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
        itemId: { type: mongoose.Schema.Types.ObjectId, ref: "items" },
        username: String,
        itemname: String,
        price: Number,
    },
    { collection: "carts" }
    );
export default schema;