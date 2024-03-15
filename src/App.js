/* eslint-disable */
import './App.css';
import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav  } from 'react-bootstrap';
import data from './data.js';



function App() {

  let [shoes,setShoes] = useState(data)
  return (
    <div className="App">
      {/* Navbar */}
     <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />

    <div class="main-bg"></div>

   <div className='container'>
      <div className='row'>
        <div className='col-md-4'>
          {/* 이게 public 폴더 이미지 쓰는 권장방식 */}
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="80%"></img>
          <h4>{shoes[0].title}</h4>
          <p>{shoes[0].content}</p>
        </div>
        <div className='col-md-4'><img src="https://codingapple1.github.io/shop/shoes2.jpg" width="80%"></img>
        <h4>{shoes[1].title}</h4>
          <p>{shoes[1].content}</p>
          </div>
        <div className='col-md-4'><img src="https://codingapple1.github.io/shop/shoes3.jpg" width="80%"></img>
          <h4>{shoes[2].title}</h4>
          <p>{shoes[2].content}</p></div>
      </div>
   </div>

</div>
  )

}



export default App;
