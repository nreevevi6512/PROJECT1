const express = require("express");
const router = express.Router();
const posts = require("../model/posts");

//GET
router.get("/", async (req, res) => {
  try {
    const posts = await posts.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

//SUBMIT POSTS
router.post("/", async (req, res) => {
  const post = new posts({
    name: req.body.name,
  });
});

module.exports = router;
