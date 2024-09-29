const express = require('express');
const pixelImage = require('../models/pixelImage.js');

const router = express.Router();

router.get("/images", async (req, res) => {
  try {
    const images = await pixelImage.find();
    res.json(images);
  } catch (error) {
    res.status(500).json({ error: "Error fetching images" });
  }
});

module.exports = router;