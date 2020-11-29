import { useEffect, useState } from "react";
import fetchIcons from "../api/fetchIcons";
import { IconData } from "../types";

/**
 * Would extend hook to take in API-enpoint url
 * for reusability
 */
const useFetchIcons = () => {
  const [data, setData] = useState<IconData>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetchIcons().then(
          (response) => response.json() as Promise<IconData>
        );
        setData(data);
      } catch (err) {
        if (err instanceof Error) setError(err);
        else throw err;
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { data, loading, error };
};

export default useFetchIcons;
