import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {

  let [글제목,b] = useState('여자 코트 추천');
  // a -> state에 보관했던 자료 나옴
  // b -> state 변경 도와주는 함수
  // 변수와 state의 차이 : state 쓰던 html은 자동 재렌더링 됨

  let [logo,setLogo] = useState('ReactBlog');
  let [title2, setTitle_2] = useState('강남 우동 맛집');
  let [title3,setTitle_3] = useState('파이썬 독학');


  
  return (
    <div className="App">
      <div className="black-nav">
        <h4>{logo}</h4>
      </div>
      <div className="list">
        <h4>{글제목}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{title2}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{title3}</h4>
        <p>2월 17일 발행</p>
      </div>
      


      
    </div>
  );
}

export default App;
