import { useEffect, useState } from "react";
import { useParams, useOutletContext, useNavigate } from "react-router";

import useFetchApi from "../../hooks/useFetchApi";

import IndividualMovieSkeleton from "../../shared_components/IndividualMovieSkeleton";
import IndividualMovieError from "../../shared_components/IndividualMovieError";
import PosterInfo from "../../shared_components/PosterInfo";
import CastSection from "../../shared_components/CastSection";
import Overview from "../../shared_components/Overview";

import MovieCard from "../../shared_components/MovieCard";

import { API_KEY } from "../../constant/constant";

const IndividualMovieDetail = () => {
  const { query } = useOutletContext();
  const { id } = useParams();
  const navigate = useNavigate();
  const [movieData, setMovieData] = useState(null);
  const [castData, setCastData] = useState([]);

  const {
    data: movie,
    isLoading: movieLoading,
    isError: movieError,
  } = useFetchApi({
    apiKey: API_KEY,
    endpoint: `movie/${id}?language=en-US`,
    queryKey: ["movie-detail", id],
    enabled: !query,
  });

  const {
    data: cast,
    isLoading: castLoading,
    isError: castError,
  } = useFetchApi({
    apiKey: API_KEY,
    endpoint: `movie/${id}/credits?language=en-US`,
    queryKey: ["movie-cast", id],
    enabled: !query,
  });

  const {
    data: searchResults,
    isLoading: searchLoading,
    isError: searchError,
  } = useFetchApi({
    apiKey: API_KEY,
    endpoint: `search/movie?language=en-US&query=${query}&page=1&include_adult=false`,
    queryKey: ["search-results", query],
    enabled: !!query,
  });

  useEffect(() => {
    if (movie) setMovieData(movie);
    if (cast?.cast) {
      const actingCast = cast.cast.filter(
        (member) => member.known_for_department === "Acting"
      );
      setCastData(actingCast);
    }
  }, [movie, cast]);

  if (query) {
    if (searchLoading) return <IndividualMovieSkeleton />;
    if (searchError)
      return <IndividualMovieError message="Error loading search results." />;

    return (
      <div className="p-6 min-h-screen">
        <h2 className="text-2xl text-white mb-4">
          Search Results for "{query}"
        </h2>
        <div className="flex justify-around flex-wrap gap-8">
          {searchResults?.results?.length > 0 ? (
            searchResults.results.map((movie) => (
              <div
                key={movie.id}
                onClick={() => navigate(`/movie/${movie.id}`)}
                className="cursor-pointer"
              >
                <MovieCard
                  id={movie.id}
                  poster={movie.poster_path}
                  title={movie.title}
                  rating={movie.vote_average}
                />
              </div>
            ))
          ) : (
            <p className="text-white">No results found.</p>
          )}
        </div>
      </div>
    );
  }

  if (!movieData || movieLoading || castLoading)
    return <IndividualMovieSkeleton />;
  if (movieError || castError)
    return (
      <IndividualMovieError message="Error loading movie details. Please try again." />
    );

  const formattedReleaseDate = movieData?.release_date
    ? new Date(movieData.release_date).toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "N/A";

  return (
    <div className="flex flex-col w-full min-h-screen">
      <div
        className="w-full bg-cover bg-center relative"
        style={{
          backgroundImage: movieData?.backdrop_path
            ? `url(https://image.tmdb.org/t/p/original${movieData.backdrop_path})`
            : "none",
        }}
      >
        <div className="bg-black/70 p-10">
          <div className="w-1/2">
            <PosterInfo
              poster_path={movieData?.poster_path}
              title={movieData?.title}
              vote_average={movieData?.vote_average}
              runtime={movieData?.runtime}
              genres={movieData?.genres}
              releaseDate={formattedReleaseDate}
            />
            <Overview
              overview={movieData?.overview || "No overview available"}
            />
          </div>
        </div>
      </div>

      {/* Cast Section */}
      <CastSection castData={castData} />
    </div>
  );
};

export default IndividualMovieDetail;
