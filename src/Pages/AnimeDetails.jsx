import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function AnimeDetails() {
  const { id } = useParams();
  const [anime, setAnime] = useState(null);

  useEffect(() => {
    fetch(`https://api.jikan.moe/v4/anime/${id}`)
      .then((res) => res.json())
      .then((data) => setAnime(data.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!anime) return <p>Chargement...</p>;

  return (
    <div className="flex flex-col md:flex-row gap-6">
      <img
        src={anime.images.jpg.large_image_url}
        alt={anime.title}
        className="w-full md:w-1/3 rounded-lg"
      />
      <div>
        <h1 className="text-3xl font-bold">{anime.title}</h1>
        <p className="mt-4">{anime.synopsis}</p>
        <p className="mt-2"><strong>Score:</strong> {anime.score}</p>
        <p className="mt-2"><strong>Episodes:</strong> {anime.episodes}</p>
      </div>
    </div>
  );
}
