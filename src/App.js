
import { Button, Nav, Navbar, Container } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import bg_img from './img/main-bg2.jpg'
import data from './data.js';
import { useState } from 'react';
import {Routes, Route, Link} from 'react-router-dom'


function App() {
  
  let [shoes, setShoes] = useState(data);
  let [dataCount, setDataCount] = useState(0); 

  console.log(shoes);
  return (

    <div className="App">

      <div className='main-bg' style={{backgroundImage:'url('+bg_img+')'}}></div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">ZAZANGU</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">자장구 타자</Nav.Link>
            <Nav.Link href="#features">자장구 사자</Nav.Link>
            <Nav.Link href="#pricing">자장구 팔자</Nav.Link>
            <Nav.Link href="#pricing">자장구 청소하자</Nav.Link>
            <Nav.Link href="#pricing">자장구 고치자</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Link to="/">홈으로 이동</Link>
      <Link to="/detail">상세 이동</Link>
      
      <Routes>
        <Route path="/" element={
        <div>
          <div>
            <div className='row'>
              {
                shoes.map((a, i)=> {
                  return (
                    <Card shoes={shoes[i]} />
                  )
                })
              }

            </div>
          </div>
        </div>}> </Route>
        <Route path="/detail" element={<div>상세페이지</div>}> </Route>
        <Route path="/about" element={<div>about 페이지</div>}> </Route>
      </Routes>


    </div>
  );
}

function Card(props) {
  return (
    <div className='col-md-4 my-2'>
    <img src={'https://codingapple1.github.io/shop/shoes'+(props.shoes.id+1)+'.jpg'} width={"80%"}/>
    <h4>{props.shoes.title}</h4>
    <p>{props.shoes.content}</p>
  </div>
  )
}



export default App;
