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
