const express = require("express");
const { parseVideo } = require("../services/parseVideo.js");

const router = express.Router();

router.get("/video", async (req, res) => {
  try {
    const url = req.query.url;
    if (!url) return res.status(400).json({ error: "URL is required" });

    const videoData = await parseVideo(url);
    res.json(videoData);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch video data" });
  }
});

module.exports = router;
