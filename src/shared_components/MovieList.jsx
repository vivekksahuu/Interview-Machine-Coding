import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

import MovieCard from "./MovieCard";
import MovieCardSkeleton from "./MovieCardSkeleton";
import ErrorSection from "./ErrorSection";
import useFetchApi from "../hooks/useFetchApi";
import { API_KEY } from "./../constant/constant";

const MovieList = ({ endpointType, query, maxPageLimit }) => {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [query, endpointType]);

  const endpoint = query
    ? `search/movie?query=${encodeURIComponent(
        query
      )}&language=en-US&page=${currentPage}`
    : `movie/${endpointType}?language=en-US&page=${currentPage}`;

  const queryKey = query
    ? ["search-movies", query, currentPage]
    : [`${endpointType}-movies`, currentPage];

  const { data, isLoading, isError } = useFetchApi({
    apiKey: API_KEY,
    endpoint,
    queryKey,
  });

  const handlePageClick = (event) => {
    setCurrentPage(event.selected + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (isLoading) return <MovieCardSkeleton />;
  if (isError) return <ErrorSection />;

  const totalPages = maxPageLimit
    ? Math.min(data.total_pages, maxPageLimit)
    : data.total_pages;

  return (
    <div className="flex flex-col items-center min-h-screen w-full">
      <div className="grid grid-cols-4 gap-10 p-10 w-full">
        {data?.results?.length > 0 ? (
          data.results.map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              poster={movie.poster_path}
              title={movie.title}
              rating={movie.vote_average}
            />
          ))
        ) : (
          <p className="h-[70vh] text-white col-span-4 flex-center">
            {query
              ? `No results found for "${query}".`
              : `No ${endpointType.replace("_", " ")} movies available.`}
          </p>
        )}
      </div>

      {totalPages > 1 && (
        <ReactPaginate
          breakLabel="..."
          nextLabel="Next >"
          previousLabel="< Previous"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          marginPagesDisplayed={2}
          pageCount={totalPages}
          forcePage={currentPage - 1}
          renderOnZeroPageCount={null}
          containerClassName="flex gap-2 text-white mt-6"
          pageClassName="border rounded cursor-pointer"
          pageLinkClassName="block px-3 py-1 w-full h-full"
          activeClassName="bg-red-500 text-white"
          activeLinkClassName="block px-3 py-1 w-full h-full"
          previousClassName="border rounded cursor-pointer"
          previousLinkClassName="block px-3 py-1"
          nextClassName="border rounded cursor-pointer"
          nextLinkClassName="block px-3 py-1"
          breakClassName="border rounded"
          breakLinkClassName="block px-3 py-1"
        />
      )}
    </div>
  );
};

export default MovieList;
