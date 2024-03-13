/* eslint-disable */ // -> lint 끄는 기능
import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {

  let [글제목,setTitle] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  // a -> state에 보관했던 자료 나옴
  // b -> state 변경 도와주는 함수
  // 변수와 state의 차이 : state 쓰던 html은 자동 재렌더링 됨

  let [logo,setLogo] = useState('ReactBlog');
  let [따봉,따봉변경] = useState(0)

  

  
  return (
    <div className="App">
      <div className="black-nav">
        <h4>{logo}</h4>
      </div>
      <div className="list">
        <h4>{글제목[0]} <span onClick={()=>{따봉변경(따봉++)}}>👍</span> {따봉} </h4>
        <p>2월 17일 발행<span onClick={()=>{setTitle(['여자 코트 추천', '강남 우동 맛집', '파이썬 독학'])}}> 👗</span></p>
      </div>



      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
      


      
    </div>
  );
}

export default App;
