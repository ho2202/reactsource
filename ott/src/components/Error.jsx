import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div class="card error-card text-center p-4 bg-dark border-0 text-white">
      <div class="error-icon mb-2">
        <i class="bi bi-question-circle-fill"></i>
      </div>
      <h3 class="mb-3">페이지를 찾을 수 없습니다 (404)</h3>
      <p class="mb-4 text-white-50">
        요청하신 페이지가 존재하지 않거나 삭제되었습니다.
        <br />
        주소를 다시 한 번 확인해 주세요.
      </p>
      <Link to={"/"} class="btn btn-primary mt-2">
        홈 화면으로 돌아가기
      </Link>
    </div>
  );
};

export default Error;
