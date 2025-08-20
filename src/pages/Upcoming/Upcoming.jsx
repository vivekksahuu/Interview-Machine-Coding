import { useOutletContext } from "react-router";
import MovieList from "../../shared_components/MovieList";

const Upcoming = () => {
  const { query } = useOutletContext();
  return <MovieList endpointType="upcoming" query={query} maxPageLimit={53} />;
};

export default Upcoming;
