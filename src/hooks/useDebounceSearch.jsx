import { useState, useEffect } from "react";

export const useDebouncedSearch = (onSearch, delay = 500) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      onSearch(query);
    }, delay);

    return () => clearTimeout(handler);
  }, [query, onSearch, delay]);

  return { query, setQuery };
};
