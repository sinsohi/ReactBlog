/* eslint-disable */
import './App.css';
import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav  } from 'react-bootstrap';
import data from './data.js';
import { Routes, Route, Link, RouterProvider} from 'react-router-dom'
import Detail from './detail.js'



function App() {

  let [shoes,setShoes] = useState(data)
  return (
    <div className="App">



      {/* Navbar */}
     <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
          
          {/* 페이지 이동 버튼 */}
           <Link to="/"> Home</Link>
           <Link to="/detail">Detail</Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />



         {/* 라우터로 페이지 나누는 법 */}
         <Routes>
        <Route path='/' element={<>
          <div class="main-bg"></div>
   <div className='container'>
      <div className='row'>
        {
          shoes.map(
            (a,i)=>{
              return (
                <Card shoes={shoes[i]}></Card>
              )
            }
          )
        }
      </div>
   </div>
   </>}/> 
        <Route path='/detail' element={<Detail></Detail>}/> 
      </Routes>

 

</div>
  )
}

function Card(props){
  return (
    <div className='col-md-4'>
    <img src={'https://codingapple1.github.io/shop/shoes' + (props.shoes.id+1) + '.jpg'} width="80%"></img>
    <h4>{props.shoes.title}</h4>
    <p>{props.shoes.content}</p>
  </div>
  )
}



export default App;
