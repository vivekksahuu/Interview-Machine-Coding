import { NavLink } from "react-router";
import { useDebouncedSearch } from "../hooks/useDebounceSearch";
import { FiSearch } from "react-icons/fi";

const Navbar = ({ setQuery }) => {
  const { query, setQuery: setLocalQuery } = useDebouncedSearch(setQuery, 300);

  return (
    <nav className="sticky top-0 z-50 bg-black text-white shadow-md h-[8vh] flex items-center px-8 border-b">
      <div className="w-full flex justify-between items-center relative">
        {/* Logo */}
        <NavLink to="/">
          <p className="text-xl">
            Movies<span className="text-red-500">DB</span>
          </p>
        </NavLink>

        {/* Navigation Links */}
        <div className="flex gap-8 text-md absolute left-1/2 transform -translate-x-1/2">
          <NavLink to="/">Popular</NavLink>
          <NavLink to="/toprated">Top Rated</NavLink>
          <NavLink to="/upcoming">Upcoming</NavLink>
        </div>

        {/* Search Input */}
        <div className="relative flex items-center gap-2">
          <input
            type="text"
            placeholder="Search Movie"
            className=" px-2 py-1 border rounded outline-none text-sm bg-black text-white placeholder-gray-400"
            value={query}
            onChange={(e) => setLocalQuery(e.target.value)}
          />
          <FiSearch className="absolute right-2 text-gray-400" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
