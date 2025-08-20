import { useOutletContext } from "react-router";
import MovieList from "../../shared_components/MovieList";

const Home = () => {
  const { query } = useOutletContext();
  return (
    <MovieList endpointType="popular" query={query} maxPageLimit={52010} />
  );
};

export default Home;
