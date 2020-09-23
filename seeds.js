var mongoose = require("mongoose"),
  Note = require("./models/notes");

var seeds = [
  {
    title: "title-1",
    body: "body-1",
  },
  {
    title: "title-2",
    body: "body-2",
  },
  {
    title: "title-3",
    body: "body-3",
  },
  {
    title: "title-4",
    body: "body-4",
  },
  {
    title: "title-5",
    body: "body-5",
  },
];

async function seedDB() {
  try {
    await Note.deleteMany({});
    console.log("SEEDS DELETED");
    for (const seed of seeds) {
      let note = await Note.create(seed);
      note.save();
    }
    console.log("SEEDS ADDED");
  } catch (err) {
    console.log(err);
  }
}

module.exports = seedDB;
