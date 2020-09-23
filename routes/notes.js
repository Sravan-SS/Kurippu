const express = require("express"),
  router = express.Router(),
  Note = require("../models/notes");

// index
router.get("/", (req, res) => {
  Note.find({}, (err, notes) => {
    try {
      res.render("notes/index", { notes: notes });
    } catch (err) {
      res.redirect("back");
      console.log(err);
    }
  });
});

module.exports = router;
