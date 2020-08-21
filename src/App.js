import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import MainContent from './Components/MainContent';
import {Container, Row, Button} from 'react-bootstrap';



function App() {
  return (
    <div className="App">

      <Header/>
      <MainContent/>
      {/* <img src= {logo} alt=""/> */}

      <Container>
        <Row>
          <h1>Hello Again</h1>
          <Button>Click here</Button>
        </Row>
      </Container>
      <h1>Heelo world</h1>
      <Button>here</Button>
      
    </div>
  );
}

export default App;
