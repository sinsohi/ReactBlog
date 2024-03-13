/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {

  let [글제목,setTitle] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  

  let [logo,setLogo] = useState('ReactBlog');
  let [따봉,따봉변경] = useState([0,0,0])
  let [modal, setModal] = useState(false);
  
  [1,2,3].map(function(a){ // array 자료 갯수만큼 함수 안의 코드 실행
    console.log(a) // 함수의 파라미터는 array 안에 있던 자료임
    return '1234543'// return에 뭐 적으면 array로 담아줌
})

  
  return (
    <div className="App">
      <div className="black-nav">
        <h4>{logo}</h4>
      </div>

      {
    글제목.map(function(a,i){
    return (<div className="list" key={i}>
    <h4 onClick={()=>{
      setModal(!modal);
    }}>
    {a} <span onClick={()=>{
        let like_copy = [...따봉];
        like_copy[i] = like_copy[i] +1;
        따봉변경(like_copy);
      }}
      >👍</span> {따봉[i]} </h4>
    <p>2월 17일 발행<span onClick={()=>{
    
      let copy = [...글제목]; 
      copy[0] = '여자 코트 추천'; 
      setTitle(copy);
      }}> 👗</span></p> 
  </div>)
  })
}




      <button onClick={()=>{
        let sort_copy = [...글제목];
        sort_copy.sort();
        setTitle(sort_copy);

      }}>sort</button>

      {
        modal == true ? <Modal></Modal> : null
      }


 
      
    </div>
  );
}



function Modal(){ 
  return (
  <div className='modal'>
  <h4>제목</h4>
  <p>날짜</p>
  <p>상세내용</p>
</div>
  )

}

export default App;
