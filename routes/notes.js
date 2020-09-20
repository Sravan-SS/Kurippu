const express = require("express"),
  router = express.Router();

// index
router.get("/", (req, res) => {
  res.render("notes/index");
});

module.exports = router;
