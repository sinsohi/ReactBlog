import { useParams } from "react-router-dom";
import { useEffect} from 'react';
import {useState} from 'react';


function Detail(props){


  let [count, setCount] = useState(0);
  let [alert, setAlert] = useState(true);
  let {id} = useParams(); 
  let 찾은상품 = props.shoes.find(function(x){
    return x.id == id
  });
  let [num,setNum] = useState(''); 
  let [warning, setWarning] = useState(false); 

  useEffect(()=>{
    if (isNaN(num) == true){
      setWarning(true);
    }
    else{
      setWarning(false);
    }
  }, [num])

  useEffect(()=>{
    let Timer = setTimeout(()=>{setAlert(false)},2000)
      console.log(2)
      return ()=>{
        console.log(1);
        clearTimeout(Timer);
      } // useEffect 동작 전에 실행됨
   },[]) // 컴포넌트 mount시 1회만 실행하고 싶으면 이렇게
   // 특정 state 변경시에만 실행하려면 [state명]

   return(

    <div className="container">
    <div className="row">
      {
      alert == true 
      ? <div className="alert alert-warning">
          2초 이내 구매시 할인
        </div>
         : null
      }

      {count}
      <button onClick={()=>{setCount(count+1)}}>버튼</button>
      <div className="col-md-6">
        <img src={'https://codingapple1.github.io/shop/shoes' + (parseInt(id)+1) +'.jpg'} width="100%" />
      </div>
      <div className="col-md-6">

        {
          warning == true ? <div>그러지마세요</div> : null
        }

        <input onChange={(e)=>{
          setNum(e.target.value)
        }}></input>
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