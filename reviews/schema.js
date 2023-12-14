import mongoose from "mongoose";
const schema = new mongoose.Schema(
    {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
        itemId: { type: mongoose.Schema.Types.ObjectId, ref: "items" },
        review: String,
    },
    { collection: "reviews" }
    );
export default schema;  