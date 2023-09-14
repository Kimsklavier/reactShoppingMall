
import { Button, Nav, Navbar, Container } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import bg_img from './img/main-bg2.jpg'
import data from './data.js';
import { useState } from 'react';
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'
import Detail from './pages/Detail.js'
import axios from 'axios'

function App() {
  
  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();
  let [clickCount, setClickCount] = useState(2);
  let [dataIs, setDataIs] = useState(true);
  let [dataCount, setDataCount] = useState(0); 

  // console.log(shoes);
  return (

    <div className="App">

      <div className='main-bg' style={{backgroundImage:'url('+bg_img+')'}}></div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">ZAZANGU</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/')}}>홈</Nav.Link>
            <Nav.Link onClick={() => { navigate(-1)}}>뒤로가기</Nav.Link>
            <Nav.Link onClick={() => { navigate('/detail')}}>자장구 사자</Nav.Link>
            <Nav.Link href="#pricing">자장구 팔자</Nav.Link>
            <Nav.Link href="#pricing">자장구 청소하자</Nav.Link>
            <Nav.Link href="#pricing">자장구 고치자</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
            
      <Routes>
        <Route path="/" element={
          <>
            <div>
              <div className='row'>
                {
                  shoes.map((a, i)=> {
                    return (
                      <Card shoes={shoes[i]} key={i} />
                    )
                  })
                }
              </div>
            </div>

            { dataIs ? 
              <button onClick={()=> {
                axios.get(`https://codingapple1.github.io/shop/data${clickCount}.json`)
                .then((data)=> {
                  console.log(data.data);
                  let copy = [...shoes, ...data.data];              
                  setShoes(copy);
                  setClickCount(clickCount+1);
                })
                .catch(()=> {
                  alert("상품이 더 없다");
                  setDataIs(false);
                })

                axios.post('')

              }}>요청 버튼</button>
              : null
            }
          </>}
        >
      
        </Route>
        <Route path="/detail/:id" element={<Detail shoes={shoes}/>}> </Route>
        <Route path="*" element={<div>없는 페이지입니다.</div>}> </Route>

        <Route path="/about" element={<About/>}>
          <Route path="member" element={<div>멤버</div>} />
          <Route path="location" element={<div>위치</div>} />
        </Route>

      </Routes>


    </div>
  );
}



function About() {
  return (
    <>
      <h4>안녕</h4>
      <Outlet></Outlet>
    </>
  )
}


function Card(props) {
  return (
    <div className='col-md-4 my-2'>
    <img src={'https://codingapple1.github.io/shop/shoes'+(props.shoes.id+1)+'.jpg'} width={"80%"}/>
    <h4>{props.shoes.title}</h4>
    <p>{props.shoes.content}</p>
    <p>{props.shoes.price}</p>
    
  </div>
  )
}



export default App;
