export default function IndividualMovieError({ message }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white bg-gray-900">
      <h1 className="text-3xl font-bold mb-4">Oops! Something went wrong.</h1>
      <p className="text-lg">{message || "Unable to load movie details."}</p>
    </div>
  );
}
