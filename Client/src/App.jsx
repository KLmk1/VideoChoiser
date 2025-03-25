import React, { useState } from "react";
import VideoForm from "./components/VideoForm";
import VideoList from "./components/VideoList";

function App() {
  const [videos, setVideos] = useState([]);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Video Vote App</h1>
      <VideoForm setVideos={setVideos} />
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
