// db.js

const mongoose = require("mongoose");

// Replace '<password>' and '<dbname>' with your actual password and database name
const dbURL =
  "mongodb+srv://itchiraira:M23Gwops47UVfRcL@one-more-thing.jnpvmiz.mongodb.net/<dbname>";

mongoose.connect(dbURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});

db.once("open", () => {
  console.log("Connected to MongoDB");
});

module.exports = db;
