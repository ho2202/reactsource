// 페이지나누기 이동

import { useState } from "react";
import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom";

const getNum = (param, defaultP) => {
  this.param = param ? param : defaultP;
};

const useCustomMove = () => {
  const [refresh, setRefresh] = useState(false);

  // <Link to={{}}/> 와 같은 역할
  const navigate = useNavigate();

  // 쿼리스트링 가져오기
  const [queryParams] = useSearchParams();

  // ?page=1&size=10&genre=&keyword= 가져오기
  const page = getNum(queryParams.get("page"), 1);
  const size = getNum(queryParams.get("size"), 10);
  const genre = getNum(queryParams.get("genre"), 0);
  const keyword = queryParams.get("keyword") || "";

  const queryDefault = createSearchParams({ page, size, genre, keyword }).toString();

  const moveToList = (pageParam) => {
    let queryStr = "";
    if (pageParam) {
      const page = getNum(pageParam.page, 1);
      const size = getNum(pageParam.size, 10);
      const genre = getNum(pageParam.genre, 0);
      const keyword = pageParam.keyword || "";

      queryStr = createSearchParams({ page, size, genre, keyword }).toString();
    } else {
      queryStr = queryDefault;
    }
    setRefresh(!refresh);

    navigate({
      pathname: `/`,
      search: queryStr,
    });
  };

  const moveToDetail = (id) => {
    navigate({
      pathname: `/books/${id}`,
      search: queryDefault,
    });
  };

  const moveToEdit = (id) => {
    navigate({
      pathname: `/edit/${id}`,
      search: queryDefault,
    });
  };

  return { moveToList, moveToDetail, moveToEdit, page, size, genre, keyword };
};

export default useCustomMove;
