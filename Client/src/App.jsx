import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { vote, selectVotes } from './features/voteSlice';

function App() {
  const votes = useSelector(selectVotes);
  const dispatch = useDispatch();

  const handleVote = (videoId) => {
    dispatch(vote(videoId));
  };

  const videos = [
    { id: 1, title: "Видео 1", url: "https://www.youtube.com/watch?v=xxxx" },
    { id: 2, title: "Видео 2", url: "https://www.youtube.com/watch?v=yyyy" }
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Список видео</h1>
      <div className="space-y-4">
        {videos.map(video => (
          <div key={video.id} className="p-4 border rounded shadow">
            <h2 className="text-xl font-semibold">{video.title}</h2>
            <p>Голосов: {votes[video.id] || 0}</p>
            <div className="mt-2 space-x-2">
              <button 
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                onClick={() => handleVote(video.id)}
              >
                Голосовать
              </button>
              <a 
                href={video.url} 
                target="_blank" 
                rel="noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
              >
                Смотреть видео
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
