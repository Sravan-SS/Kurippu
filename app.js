const express = require("express"),
  bodyParser = require("body-parser"),
  mongoose = require("mongoose");

// routes
const indexRoutes = require("./routes/index"),
  noteRoutes = require("./routes/notes"),
  todoRoutes = require("./routes/todos");

// express
const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

app.use(indexRoutes);
app.use("/notes", noteRoutes);
app.use("/todos", todoRoutes);

// listner
app.listen(3000, () => {
  console.log("App Server Started!");
});
