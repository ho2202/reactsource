import { useEffect, useState } from "react";
import { getRead } from "../api/api";

export const useRead = (id) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) {
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    getRead(id)
      .then((result) => {
        setData(result);
      })
      .catch((e) => {
        console.error(e);
        setError(e);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return { data, loading, error };
};
