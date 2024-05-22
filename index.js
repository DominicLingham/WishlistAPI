const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./db/db");
const routes = require("./routes/test.route");

const port = process.env.PORT;

const app = express();
app.use(express.json());
app.use(cors({ origin: "*" }));

// routes
app.use("/api", routes);

app.get("/", (req, res) => {
  res.send("Hello");
});

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`app is listening on port: ${port}`);
  });
});
