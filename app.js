const express = require("express"),
  bodyParser = require("body-parser"),
  mongoose = require("mongoose"),
  seedDB = require("./seeds");

// routes
const indexRoutes = require("./routes/index"),
  noteRoutes = require("./routes/notes"),
  todoRoutes = require("./routes/todos");

// models
const Note = require("./models/notes");

// mongoose
const url = "mongodb://localhost:27017/kurippu-app";
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => console.log("DATABASE CONNECTED"))
  .catch((err) => console.log("ERROR: ", err.message));

// express
const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

app.use(indexRoutes);
app.use("/notes", noteRoutes);
app.use("/todos", todoRoutes);

// seeding
seedDB();

// listner
app.listen(3000, () => {
  console.log("APP SERVER STARTED");
});
