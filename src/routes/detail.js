import { useParams } from "react-router-dom";
import { useEffect} from 'react';
import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav  } from 'react-bootstrap';



function Detail(props){


  let {id} = useParams(); 
  let 찾은상품 = props.shoes.find(function(x){
    return x.id == id
  });
  let [tab, setTab] = useState(0);



   return(

    <div className="container">
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

    <Nav variant="tabs" defaultActiveKey="link0">
      <Nav.Item>
        <Nav.Link onClick={()=>{setTab(0)}} eventKey="link0">버튼0</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link onClick={()=>{setTab(1)}} eventKey="link1">버튼1</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link onClick={()=>{setTab(2)}} eventKey="link2">버튼2</Nav.Link>
      </Nav.Item>
    </Nav>
    <TabContent tab = {tab}></TabContent>

  </div> 

  
   )
}

function TabContent({tab}){

  let [fade, setFade] = useState('')

  useEffect(()=>{
    let Timer = setTimeout(()=>{
      setFade('end');
    },100)
    return(()=>{
      setFade('');
      clearTimeout(Timer);
    })
  },[tab]) // tab state가 변할 때 end 부착

  return (<div className={`start ${fade}`}>
    {[<div>내용0</div>,<div>내용1</div>,<div>내용2</div>][tab]}
    </div>)
}


export default Detail;