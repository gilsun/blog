import { useState } from "react";
import "./App.css";
function App() {
  let [글제목, 글제목변경] = useState([
    "남자코트 추천",
    "강남우동맛집",
    "파이썬독학",
  ]);
  let [따봉, 따봉변경] = useState(0);
  let [modal, modal변경] = useState(false);

  const modalHandler = () => {
    if(modal===true){
      modal변경(false)
    }
    else{
      modal변경(true)
    }
  };

  const addup = () => {
    따봉변경(따봉 + 1);
  };
  const 제목변경 = () => {
    let newArray = [...글제목];
    newArray[0] = "여자코트 추천";
    newArray[1] = "강남맛집 추천";
    newArray[2] = "자바스크립트 추천";
    글제목변경(newArray);
  };
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      <button onClick={제목변경}>버튼</button>
      <div className="list">
        <h4>
          {글제목[0]}
          <span onClick={addup}> 👍</span> {따봉}
        </h4>
        <p>2월 17일 발행 </p>
        <hr />
      </div>

      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행 </p>
        <hr />
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행 </p>
        <hr />
      </div>
      <button
        onClick={modalHandler}
      >
        모달버튼
      </button>
      {modal && <Modal />}
    
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
