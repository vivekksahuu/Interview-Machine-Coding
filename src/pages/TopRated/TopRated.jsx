import { useOutletContext } from "react-router";
import MovieList from "../../shared_components/MovieList";

const TopRated = () => {
  const { query } = useOutletContext();
  return (
    <MovieList endpointType="top_rated" query={query} maxPageLimit={515} />
  );
};

export default TopRated;
