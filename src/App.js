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
        e.stopPropagation();
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
      <button onClick={(e)=>{
        let copy = [...글제목];
        copy.splice(i,1);
        setTitle(copy);
      }}>삭제</button>
  </div>)
  })
}
      {/* 글제목 가나다 순으로 정렬 */}
      <button onClick={()=>{
        let sort_copy = [...글제목];
        sort_copy.sort();
        setTitle(sort_copy);

      }}>sort</button>

      {/* 버튼 누르면 글 추가 */}
      
      <input onChange={(e)=>{ 
        setContent(e.target.value); 
      }}></input>
      <button onClick={()=>{
        let copy = [...글제목];
        copy.unshift(content);
        setTitle(copy);
      }}>추가</button>
 
      
      {/* <Modal2></Modal2> */}

    
    {/* Modal 창 띄우기 */}
      {
        modal == true ? <Modal title={title} setTitle={setTitle}  color='skyblue' 글제목={글제목}/> : null
      }

    </div>
  );


}



function Modal(props){ 
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


//class 문법으로 컴포넌트 만들려면
// class Modal2 extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       name : 'kim',
//       age : 20
//     }
//   }
//   render(){
//     return(
//       <div>안녕 {this.state.name}
//       <button onClick={()=>{
//         this.setState({age : 21})
//       }}></button>
//       </div>
//     )
//   }
// }

export default App;
