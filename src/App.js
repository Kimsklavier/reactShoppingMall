import './App.css'
import { useState } from 'react';
import data from './data.js';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link } from 'react-router-dom'
import Detail from './pages/Detail.js'
import FarmList from './pages/FarmList.js';

function App() {

  let [goodClickCnt, setGoodClickCnt] = useState(data.map(()=>0));
  let [farmDetailModals, setFarmDetailModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [inputModalFlag, setInputModalFlag] = useState(false);
  let [farmData, setFarmData] = useState(data);

  return (
    <div className="App">
      <div className="black-nav">
        <div>한국 Misumi</div>
      </div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand className="ml-auto" href="#home">한국 Misumi</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">홈</Nav.Link>
            <Nav.Link href="/detail">농장 찾기</Nav.Link>
            <Nav.Link href="#pricing">지역 특산물</Nav.Link>
            <Nav.Link href="#pricing">고객센터</Nav.Link>
            <Nav.Link href="#pricing">로그인/회원가입</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
      <Routes>
        <Route path="/home" element={
        <div>
          <div className="modalContainer">
            <Button variant="warning" onClick={() => {
                setFarmDetailModal(false);
              }}>초기화</Button>
            
            <Button variant="primary" onClick={() => {
              setInputModalFlag(!inputModalFlag);
            }}>농장 추가</Button>
          </div>
          {
            inputModalFlag == true ?
            <FarmInputModal  farmData = {farmData} setFarmData = {setFarmData} goodClickCnt = {goodClickCnt} setGoodClickCnt = {setGoodClickCnt} />: null
          }

          <FarmList farmData = {farmData} setFarmData = {setFarmData} setFarmDetailModal={setFarmDetailModal} setTitle={setTitle} setGoodClickCnt={setGoodClickCnt} goodClickCnt={goodClickCnt}/>
          <div className="detailDiv">
            {
              farmDetailModals == true ?
              <FarmDetailModal farmData = {farmData} title={title} />: null
            }
          </div>
        </div> } />
        <Route path="/detail" element={ <Detail/> } />
      </Routes>

    </div>
  );
}



// 농장 세부 사항 모달 컴포넌트
function FarmDetailModal(props) {
  return (
    <div className="detailmodal">
      <h4>{props.farmData[props.title].fruits } 농장 </h4>
      <p>{props.farmData[props.title].farmerName} 할배</p>
      <p>{props.farmData[props.title].call}</p>
      <p>상세내용</p>
    </div>
  )
}

// 농장 추가 모달 컴포넌트
function FarmInputModal(props) {
  let fruits = '';
  let farmerName = '';
  let call = '';

  // 농장 추가하기
  let farmRegister = () => {
    const addFarmData = {
      fruits:fruits,
      farmerName:farmerName,
      call:call,
      goodClickCnt : 0
    };
    let farmDataCopy = [...props.farmData];
    farmDataCopy.push(addFarmData);
    props.setFarmData(farmDataCopy);

    let goodClickCntCopy = [...props.goodClickCnt];
    goodClickCntCopy.push(0);
    props.setGoodClickCnt(goodClickCntCopy);
  }
  
  return (
    <div className='modalContainer'>
      <input type='text' placeholder='과일명' onChange={ (e)=>{ 
        fruits = e.target.value;
      }}/>
      <input type='text' placeholder='할매/할매 이름' onChange={(e)=>{
        farmerName = e.target.value;
      }}/>
      <input type='text' placeholder='전화번호' onChange={(e)=>{
        call = e.target.value;
      }}/>
      <Button variant='primary' onClick={farmRegister}>등록</Button>
    </div>
  )
}


export default App;
