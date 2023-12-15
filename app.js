import "dotenv/config.js";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config.js";
import session from "express-session";
import UserRoutes from "./users/routes.js";
import ItemRoutes from "./items/routes.js";
import ReviewRoutes from "./reviews/routes.js";
import CartRoutes from "./carts/routes.js";
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING;
mongoose.connect(CONNECTION_STRING);
const app = express();
app.use(cors({
    credentials: true,
    origin: process.env.FRONTEND_URL
}));
const sessionOptions = {
    secret: "any string",
    resave: false,
    saveUninitialized: false,
  };
  if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
      sameSite: "none",
      secure: true,
    };
  }
app.use(session(sessionOptions));

  
app.use(express.json());
UserRoutes(app);
ItemRoutes(app);
ReviewRoutes(app);
CartRoutes(app);

app.listen(process.env.PORT || 4000);