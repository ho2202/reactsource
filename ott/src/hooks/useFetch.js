import { useEffect, useState } from "react";
import { getList } from "../api/api";

const initState = {
  current: 0,
  dtoList: [],
  next: false,
  nextPage: 0,
  pageNumList: [],
  pageRequestDTO: null,
  prev: false,
  prevPage: 0,
  totalCount: 0,
  totalPage: 0,
};

export const useFetch = (moveState) => {
  const [data, setData] = useState(initState);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { moveToList, page, size, type, keyword, refresh } = moveState;

  useEffect(() => {
    getList({ page, size, type, keyword })
      .then((result) => {
        setData(result);

        setLoading(false);
      })
      .catch((e) => setError(e.message));
  }, [page, size, type, keyword, refresh]);

  return { data, loading, error };
};
