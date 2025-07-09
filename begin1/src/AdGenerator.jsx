import React, { useState } from "react";
import OpenAI from "openai";

async function ask_gpt(text) {
  const role_content = "너는 최고의 카피라이터야  사용자가 제시하는 내용을 참고해서 1~2줄 광고문구 5개를 생성해";
  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "developer", content: role_content },
      { role: "user", content: text },
    ],
  });
}
const client = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

const AdGenerator = () => {
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    strenghth: "",
    tone: "",
    keyword: "",
    value: "",
  });
  const [ads, setAds] = useState([]);
  const [loading, setLoading] = useState([false]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      setLoading(true);
      const data = await ask_gpt(prompt);

      const lines = data.split("\n").map((line) => line.trim());
      setAds(lines);
    } catch (error) {
      console.error("실패 ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h3>광고 문구 제작 프로그램</h3>
      <hr className="border-1" />
      <form action="" method="post" className="mt-3 row">
        <div className="col-md-6 mb-3">
          <label for="">제품명</label>
          <input type="text" name="name" className="form-control" value={formData.name} onChange={handleChange} />
        </div>
        <div className="col-md-6 mb-3">
          <label for="">브랜드명</label>
          <input type="text" name="brand" className="form-control" value={formData.brand} />
        </div>
        <div className="col-md-6 mb-3">
          <label for="">제품특징</label>
          <input type="text" name="strenghth" className="form-control" value={formData.strenghth} />
        </div>
        <div className="col-md-6 mb-3">
          <label for="">톤앤매너</label>
          <input
            type="text"
            name="tone"
            className="form-control"
            value={formData.tone}
            placeholder="발랄하게, 유머러스하게, 감성적으로..."
          />
        </div>
        <div className="col-md-6 mb-3">
          <label for="">필수 포함 키워드</label>
          <input type="text" name="keyword" className="form-control" value={formData.keyword} />
        </div>
        <div className="col-md-6 mb-3">
          <label for="">브랜드 핵심 가치</label>
          <input type="text" name="value" className="form-control" value={formData.value} />
        </div>
        <div>
          <button type="submit" className="btn btn-primary">
            {loading ? "생성중..." : "광고 문구 생성"}
          </button>
        </div>
      </form>
      {/* <!-- 결과 --> */}
      {ads.length > 0 && (
        <div>
          <h4>생성된 문구</h4>
          <ul>
            {ads.map((line, idx) => (
              <li key={idx}>{line}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AdGenerator;
