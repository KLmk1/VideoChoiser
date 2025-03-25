import express from "express";
import cors from "cors";
import axios from "axios";
import "dotenv/config";

const app = express();
app.use(cors());
app.use(express.json());

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY; // Храним API-ключ в .env

app.get("/api/video", async (req, res) => {
  try {
    const videoUrl = req.query.url;
    if (!videoUrl) {
      return res.status(400).json({ error: "URL видео не передан" });
    }

    // Достаём ID видео из URL
    const videoId = new URL(videoUrl).searchParams.get("v");
    if (!videoId) {
      return res.status(400).json({ error: "Неверный формат URL" });
    }

    // Делаем запрос к YouTube API
    const { data } = await axios.get(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${YOUTUBE_API_KEY}`
    );

    if (!data.items.length) {
      return res.status(404).json({ error: "Видео не найдено" });
    }

    const video = data.items[0].snippet;
    res.json({
      title: video.title,
      thumbnailUrl: video.thumbnails.high.url,
      videoUrl,
    });
  } catch (error) {
    console.error("Ошибка при обработке запроса:", error.response?.data || error);
    res.status(500).json({ error: "Ошибка сервера" });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
