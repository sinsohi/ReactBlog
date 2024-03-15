/* eslint-disable */
import './App.css';
import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav  } from 'react-bootstrap';




function App() {

  
  
  return (
    <div className="App">
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

</div>
  )

}



export default App;
