/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {

  let [글제목,setTitle] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  

  let [logo,setLogo] = useState('ReactBlog');
  let [따봉,따봉변경] = useState([0,0,0])
  let [modal, setModal] = useState(false);
  let [title,detailTitle] = useState(0);  
  let [content, setContent] = useState('');
  
  [1,2,3].map(function(a){ 
    console.log(a) 
    return '1234543'
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
      detailTitle(i); // detail title 바꾸기

    }}>
    {a} <span onClick={(e)=>{
        e.stopPropagation(); // 상위 html로 퍼지는 이벤트 버블링 막기
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
      {/* 글제목 가나다 순으로 정렬 */}
      <button onClick={()=>{
        let sort_copy = [...글제목];
        sort_copy.sort();
        setTitle(sort_copy);

      }}>sort</button>


      <input onChange={(e)=>{ // <input>에 뭔가 입력 시 코드 실행하고 싶으면 onChange / onInput
        setContent(e.target.value); // 비동기처리
        console.log(content);
      }}></input>


    
    {/* Modal 창 띄우기 */}
      {
        modal == true ? <Modal title={title} setTitle={setTitle}  color='skyblue' 글제목={글제목}/> : null
      }

    </div>
  );
}



function Modal(props){  // Step 2. props 파라미터 등록 후 props.작명 사용
  return (
  <div className='modal' style={{background : props.color}}>
  <h4>{props.글제목[props.title]}</h4>
  <p>날짜</p>
  <p>상세내용</p>
  <button onClick={
    ()=>{
      let title_copy = [...props.글제목];
      title_copy[0] = '여자 코트 추천';
      props.setTitle(title_copy);
    }
  }>글수정</button>
</div>
  )

}

export default App;
