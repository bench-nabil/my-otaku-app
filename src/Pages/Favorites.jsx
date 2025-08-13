import { useState, useEffect } from "react";
import AnimeCard from "../components/AnimeCard";

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(saved);
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Mes Favoris</h1>
      {favorites.length === 0 ? (
        <p>Aucun favori pour le moment.</p>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favorites.map((anime) => (
            <AnimeCard key={anime.mal_id} anime={anime} />
          ))}
        </div>
      )}
    </div>
  );
}
