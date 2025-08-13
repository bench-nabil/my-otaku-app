import { Link } from "react-router-dom";

export default function AnimeCard({ anime }) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:scale-105 transform transition">
      <img
        src={anime.images.jpg.image_url}
        alt={anime.title}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-bold">{anime.title}</h2>
        <Link
          to={`/anime/${anime.mal_id}`}
          className="text-red-500 hover:underline"
        >
          Voir détails
        </Link>
      </div>
    </div>
  );
}
