import { useParams } from "react-router-dom";
import { useEffect} from 'react';
import {useState} from 'react';


function Detail(props){

// 컴포넌트에 갈고리 다는 법
  useEffect(()=>{
    // mount, update시 여기 코드 실행됨 
    console.log('안녕');
    // (useEffect 안에 있는 코드는 html 렌더링 후에 동작) -> 어려운 연산, 서버에서 데이터 가져오는 작업

    setTimeout(()=>{
      document.querySelector('.alert').style.display = 'none';
    },2000)
    })

  let [count, setCount] = useState(0);

  let {id} = useParams(); 
  let 찾은상품 = props.shoes.find(function(x){
    return x.id == id
  })

   return(
    <div className="container">
      <div className="alert alert-warning">
        2초 이내 구매시 할인
      </div>
      
      {count}
      <button onClick={()=>{setCount(count+1)}}>버튼</button>
    <div className="row">
      <div className="col-md-6">
        <img src={'https://codingapple1.github.io/shop/shoes' + (parseInt(id)+1) +'.jpg'} width="100%" />
      </div>
      <div className="col-md-6">
        <h4 className="pt-5">{찾은상품.title}</h4>
        <p>{찾은상품.content}</p>
        <p>{찾은상품.price}원</p>
        <button className="btn btn-danger">주문하기</button> 
      </div>
    </div>
  </div> 
   )
}

export default Detail;