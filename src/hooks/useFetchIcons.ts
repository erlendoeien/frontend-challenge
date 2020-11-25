import React, { useEffect, useState } from "react";
import fetchIcons from "../api/fetchIcons";
import { IconData } from "../types";

/**
 * Would extend hook to take in API-enpoint url
 * for reusability
 */
const useFetchIcons = () => {
  const [data, setData] = useState<IconData>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetchIcons().then(
          (response) => response.json() as Promise<IconData>
        );
        setData(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { data, loading, error };
};

export default useFetchIcons;
