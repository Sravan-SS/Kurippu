const express = require("express"),
  router = express.Router();

// index
router.get("/", (req, res) => {
  res.render("todos/index");
});

module.exports = router;
