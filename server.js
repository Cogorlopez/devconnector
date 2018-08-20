const express = require("express");
const mongoose = require("mongoose");

const users = require("./routes/api/users.js");
const profile = require("./routes/api/profile.js");
const posts = require("./routes/api/posts.js");

const app = express();

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Hello world"));

// Use routes
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
