const express = require("express"),
  router = express.Router();

// landing
router.get("/", (req, res) => {
  res.render("landing");
});

module.exports = router;
