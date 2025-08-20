const PosterInfo = ({
  poster_path,
  title,
  vote_average,
  runtime,
  genres,
  releaseDate,
}) => {
  return (
    <div className="flex gap-6">
      {/* Poster */}
      <div className="w-[30%] rounded">
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      {/* Movie Info */}
      <div className="text-white flex justify-evenly flex-col">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="mt-2 text-yellow-400">Rating: {vote_average}</p>
        <p>Duration: {runtime} mins</p>
        <p>Genre: {genres?.map((g) => g.name).join(", ") || "N/A"}</p>
        <p>Release Date: {releaseDate}</p>
      </div>
    </div>
  );
};

export default PosterInfo;
