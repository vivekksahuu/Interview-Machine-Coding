const CastCard = ({ profile_path, name, character }) => {
  return (
    <div className="w-50 bg-gray-800 rounded-lg overflow-hidden shadow-lg text-center p-2">
      <div className="w-full h-60 bg-gray-700">
        <img
          src={
            profile_path
              ? `https://image.tmdb.org/t/p/w500${profile_path}`
              : "https://via.placeholder.com/150x225?text=No+Image"
          }
          alt={name}
          className="w-full h-full object-fill"
        />
      </div>
      <p className="text-white mt-2 font-semibold truncate">{name}</p>
      <p className="text-yellow-400 text-sm">Character: {character}</p>
    </div>
  );
};

export default CastCard;
