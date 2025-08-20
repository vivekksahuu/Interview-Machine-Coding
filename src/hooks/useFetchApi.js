import { useQuery } from "@tanstack/react-query";

export default function useFetchApi({ apiKey, endpoint, queryKey }) {
  const { data, isLoading, isError } = useQuery({
    queryKey,
    queryFn: async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/${endpoint}&api_key=${apiKey}`
      );
      if (!res.ok) throw new Error("Network error");
      return res.json();
    },
  });

  return { data, isLoading, isError };
}
