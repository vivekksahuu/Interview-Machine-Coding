import { useNavigate } from "react-router";

const MovieCard = ({ id, poster, title, rating }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movie/${id}`);
  };

  return (
    <div
      className="w-60 bg-gray-800 rounded-lg overflow-hidden shadow-lg cursor-pointer hover:scale-105 transition"
      onClick={handleClick}
    >
      <div className="w-full h-70 bg-gray-700">
        <img
          src={`https://image.tmdb.org/t/p/w500${poster}`}
          alt={title}
          className=" w-full h-full object-fill"
        />
      </div>

      <div className="p-3 text-center space-y-2">
        <p className="text-white font-semibold truncate">{title}</p>
        <p className="text-yellow-400">Rating: {rating}</p>
      </div>
    </div>
  );
};

export default MovieCard;
