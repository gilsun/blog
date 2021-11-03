import { useState } from "react";
import "./App.css";
function App() {
  let [title, setTitle] = useState([
    "남자코트 추천",
    "강남우동맛집",
    "파이썬독학",
  ]);
  let [따봉, 따봉변경] = useState(0);
  const addup = () => {
    따봉변경(따봉 + 1);
  };
  const 제목변경 = () => {
    setTitle(["여자코트 추천", "강남우동맛집", "파이썬독학"]);
  };
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      <button onClick={제목변경}>버튼</button>
      <div className="list">
        <h4>
          {title[0]}
          <span onClick={addup}> 👍</span> {따봉}
        </h4>
        <p>2월 17일 발행 </p>
        <hr />
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
        <p>2월 17일 발행 </p>
        <hr />
      </div>
      <div className="list">
        <h4>{title[2]}</h4>
        <p>2월 17일 발행 </p>
        <hr />
      </div>
    </div>
  );
}
export default App;