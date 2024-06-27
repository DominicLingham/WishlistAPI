const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./db/db");
const wishlistRoutes = require("./routes/wishlist.route");
const authRoutes = require("./routes/auth.route");

const port = process.env.PORT;

const app = express();
app.use(express.json());
app.use(cors({ origin: "*" }));

// routes
app.use("/wishlist", wishlistRoutes);
app.use("/auth", authRoutes);

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`app is listening on port: ${port}`);
  });
});
