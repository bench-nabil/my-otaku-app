import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-red-500">
          MyOtakuApp
        </Link>
        <div className="space-x-4">
          <Link to="/" className="hover:text-red-400">Accueil</Link>
          <Link to="/favoris" className="hover:text-red-400">Favoris</Link>
        </div>
      </div>
    </nav>
  );
}
