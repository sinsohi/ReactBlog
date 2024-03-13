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
        <p>2월 17일 발행<span onClick={()=>{
          let arr = [1,2,3];

          // state가 array/object면 shallow copy를 만들어서 수정해야 함
          let copy = [...글제목]; // 독립적인 array 사본 생성
          copy[0] = '여자 코트 추천';
          setTitle(copy);
          }}> 👗</span></p>
      </div>



      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>

      <button onClick={()=>{
        let sort_copy = [...글제목];
        sort_copy.sort();
        setTitle(sort_copy);

      }}>sort</button>

  <Modal></Modal>
      
    </div>
  );
}

// Component 만드는 법
function Modal(){ // 다른 function 바깥에 만들기 & 영어 대문자 
  return (
  <div className='modal'>
  <h4>제목</h4>
  <p>날짜</p>
  <p>상세내용</p>
</div>
// return 안에는 하나의 tag만! 병렬 X
  )

}

export default App;
