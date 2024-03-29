/* eslint-disable */
import './App.css';
import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav  } from 'react-bootstrap';
import data from './data.js';
import { Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'
import Detail from './routes/detail.js'
import Card from './routes/component.js'
import axios from 'axios'



function App() {

  let [shoes,setShoes] = useState(data)
  let navigate = useNavigate(); // 페이지 이동 도와주는 useNavigate() 함수


  return (
    <div className="App">
      {/* Navbar */}
     <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
          
            <Nav.Link onClick={()=>{ navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/detail')}}>Detail</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />

      <Routes>
        <Route path='/' element={<List shoes = {shoes} setShoes = {setShoes}></List>}/> 
        <Route path='/detail/:id' element={<Detail shoes={shoes}></Detail>}/> 

        {/* nested routes -> 여러 유사한 페이지 필요할 때 */}
        <Route path='/about' element={<About></About>}>
          <Route path='member' element={<div>멤버임</div>}></Route>
          <Route path='location' element={<div>위치 정보임</div>}></Route>
        </Route>

        {/* 404 페이지 */}
        <Route path='*' element={<div>없는 페이지요</div>}></Route>

    

      </Routes>
</div>
  )
}

function List(props){
  return (<>
    <div class="main-bg"></div>
<div className='container'>
<div className='row'>
  {
    props.shoes.map(
      (a,i)=>{
        return (
          <Card shoes={props.shoes[i]}></Card>
        )
      }
    )
  }
</div>
</div>
<button onClick={()=>{
          axios.get('http://codingapple1.github.io/shop/data2.json').then((data)=>{
            let copy_shoes = [...props.shoes];

            copy_shoes.push(...data.data);
            props.setShoes(copy_shoes);
          })
          .catch(()=>{console.log('실패함 ㅅㄱ')})
      }}>더보기</button>
</>)
}


function About(){
  return (
    <div>
      <h4>회사 정보임</h4>
      <Outlet></Outlet>
    </div>
  )
}


export default App;
