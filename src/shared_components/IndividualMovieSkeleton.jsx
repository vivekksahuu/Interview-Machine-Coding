export default function IndividualMovieSkeleton() {
  return (
    <div className="flex flex-col w-full min-h-screen animate-pulse">
      <div className="w-full bg-gray-700/40 p-6 md:p-10">
        <div className="w-full md:w-1/2">
          <div className="flex gap-6">
            {/* Poster */}
            <div className="w-40 md:w-60 h-60 bg-gray-600 rounded-lg shadow-lg"></div>
            {/* Movie Info */}
            <div className="flex-1 space-y-2">
              <div className="h-8 bg-gray-600 w-3/4 rounded"></div>
              <div className="h-6 bg-gray-600 w-1/4 rounded"></div>
              <div className="h-6 bg-gray-600 w-1/3 rounded"></div>
              <div className="h-6 bg-gray-600 w-1/2 rounded"></div>
              <div className="h-6 bg-gray-600 w-2/3 rounded"></div>
            </div>
          </div>

          {/* Overview */}
          <div className="mt-6 space-y-2">
            <div className="h-6 bg-gray-600 w-1/4 rounded"></div>
            <div className="h-4 bg-gray-600 w-full rounded"></div>
            <div className="h-4 bg-gray-600 w-full rounded"></div>
            <div className="h-4 bg-gray-600 w-5/6 rounded"></div>
          </div>
        </div>
      </div>

      {/* Cast Section */}
      <div className="p-6">
        <div className="h-6 bg-gray-600 w-1/4 rounded mb-4"></div>
        <div className="flex flex-wrap gap-4">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="w-40 bg-gray-700 rounded-lg overflow-hidden p-2"
            >
              <div className="w-full h-52 bg-gray-600 rounded-lg mb-2"></div>
              <div className="h-4 bg-gray-600 w-3/4 rounded mb-1"></div>
              <div className="h-3 bg-gray-600 w-1/2 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
