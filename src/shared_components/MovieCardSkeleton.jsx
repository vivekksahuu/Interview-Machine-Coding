const MovieCardSkeleton = () => {
  return (
    <div className="grid grid-cols-4 gap-10 p-10 w-full min-h-screen">
      {Array.from({ length: 8 }).map((_, index) => (
        <div
          key={index}
          className="w-65 bg-gray-800 rounded-lg overflow-hidden shadow-lg cursor-pointer animate-pulse"
        >
          {/* Image placeholder */}
          <div className="w-full h-65 bg-gray-700"></div>

          {/* Text placeholders */}
          <div className="p-3 text-center space-y-2">
            <div className="h-4 bg-gray-600 rounded w-3/4 mx-auto"></div>
            <div className="h-4 bg-gray-600 rounded w-1/2 mx-auto"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieCardSkeleton;
