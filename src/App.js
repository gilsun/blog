import { useState } from "react";
import "./App.css";
function App() {
  let [글제목, 글제목변경] = useState([
    "남자코트 추천",
    "강남우동맛집",
    "파이썬독학",
  ]);
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, modal변경] = useState(false);
  let [누른제목, 누른제목변경] = useState(0);
  let [입력값, 입력값변경] = useState("");

  const modalHandler = () => {
    if (modal === true) {
      modal변경(false);
    } else {
      modal변경(true);
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

      {글제목.map((글, index) => {
        return (
          <div className="list" key={index}>
            <h4
              onClick={() => {
                누른제목변경(index);
              }}
            >
              {글}
              <span
                onClick={() => {
                  따봉변경();
                }}
              >
                {" "}
                👍
              </span>
            </h4>
            <p>2월 17일 발행 </p>
            <hr />
          </div>
        );
      })}

      <div className="publish">
        <input
          onChange={(e) => {
            입력값변경(e.target.value);
          }}
        />
        <button onClick={()=>{

          let arrayCopy=[...글제목];
          arrayCopy.unshift(입력값)
          글제목변경(arrayCopy)
        }


        }>저장 버튼</button>
      </div>

      <button
        onClick={() => {
          누른제목변경(0);
        }}
      >
        {" "}
        버튼
      </button>
      <button
        onClick={() => {
          누른제목변경(1);
        }}
      >
        {" "}
        버튼
      </button>
      <button
        onClick={() => {
          누른제목변경(2);
        }}
      >
        {" "}
        버튼
      </button>

      <button onClick={modalHandler}>모달 열고닫기 </button>

      <input
        value={입력값}
        onChange={(e) => {
          입력값변경(e.target.value);
        }}
      />
      <p>{입력값}</p>

      {modal ? <Modal 누른제목={누른제목} 글제목={글제목} /> : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h2>제목 :{props.글제목[props.누른제목]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

const NewNote = (props) => {
  return (
    <div>
      <h3>{}</h3>
    </div>
  );
};

export default App;
