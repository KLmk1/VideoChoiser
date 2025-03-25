import React, { useState } from "react";
import axios from "axios";

const VideoForm = ({ setVideos }) => {
  const [url, setUrl] = useState("");

  const fetchVideoData = async () => {
    try {
      const response = await axios.get(`/api/video?url=${encodeURIComponent(url)}`);
      setVideos(prev => [...prev, response.data]);
    } catch (error) {
      console.error("Ошибка загрузки видео", error);
    }
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        className="border p-2 w-full"
        placeholder="Введите URL видео"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button className="bg-blue-500 text-white px-4 py-2 mt-2" onClick={fetchVideoData}>
        Добавить видео
      </button>
    </div>
  );
};

export default VideoForm;
