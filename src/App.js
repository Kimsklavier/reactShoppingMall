import './App.css'
import { useState } from 'react';
import data from './data.js';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  let [titleArr, setTitleArr] = useState(['사과', '망고스틴', '청포도']);
  let [granpaNameArr, setGranpaNameArr] = useState(['성민', '수현', '지훈']);
  let [goodClickCnt, setGoodClickCnt] = useState([0,0,0]);
  let [farmDetailModals, setFarmDetailModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [inputModalFlag, setInputModalFlag] = useState(false);
  let [farmerName, setFarmerName] = useState('');
  let [fruitsName, setFruitsName] = useState('');
  
  return (
    <div className="App">
      <div className="black-nav">
        <div>과일 파는 사람들</div>
      </div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand className="ml-auto" href="#home">과일파는 사람들</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">홈</Nav.Link>
            <Nav.Link href="#features">농장 찾기</Nav.Link>
            <Nav.Link href="#pricing">지역 특산물</Nav.Link>
            <Nav.Link href="#pricing">고객센터</Nav.Link>
            <Nav.Link href="#pricing">로그인/회원가입</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
        <Farmlist farmDetailModals = {farmDetailModals} setFarmDetailModal={setFarmDetailModal} setTitle={setTitle} titleArr={titleArr} setGoodClickCnt={setGoodClickCnt} granpaNameArr={granpaNameArr} goodClickCnt={goodClickCnt} setTitleArr={setTitleArr} setGranpaNameArr = {setGranpaNameArr} fruitsName = {fruitsName} farmerName = {farmerName} setFruitsName={setFruitsName} setFarmerName={setFarmerName} title={title}/>
        <div className="modalContainer">
          <Button variant="warning" onClick={() => {
              setFarmDetailModal(false);
            }}>초기화</Button>
          
          <Button variant="primary" onClick={() => {
            setInputModalFlag(!inputModalFlag);
          }}>농장 추가</Button>
        </div>

        {
          inputModalFlag == true ? <FarmInputModal goodClickCnt = {goodClickCnt} setGoodClickCnt = {setGoodClickCnt} titleArr = {titleArr} granpaNameArr = {granpaNameArr} setTitleArr={setTitleArr} setGranpaNameArr = {setGranpaNameArr} fruitsName = {fruitsName} farmerName = {farmerName} setFruitsName={setFruitsName} setFarmerName={setFarmerName} />: null
        }
        {
          farmDetailModals == true ? <FarmDetailModal title={title} goodClickCnt = {goodClickCnt} setGoodClickCnt = {setGoodClickCnt} titleArr = {titleArr} granpaNameArr = {granpaNameArr} setTitleArr={setTitleArr} setGranpaNameArr = {setGranpaNameArr} fruitsName = {fruitsName} farmerName = {farmerName} setFruitsName={setFruitsName} setFarmerName={setFarmerName} />: null
        }
    </div>
  );
}

function Farmlist(props) {
  return (
    <div className="listContainer">
      {
        props.titleArr.map((a,i)=> {
          return (
            // 농장 정보 리스트
            <div className="list">
              <div id='img_div' style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/`+i +`.jpg)` }}></div>
                
              
              <h4 onClick={()=> {
                  props.setFarmDetailModal(true);
                  props.setTitle(i);
                }
                }> {a} 농장</h4>
              <p>{props.granpaNameArr[i]} 할배</p>

              {/* 좋아요 버튼 */}
              <span className='clickBtn' onClick={()=> {
                let goodClickCntCopy = [...props.goodClickCnt];
                goodClickCntCopy[i] += 1;
                props.setGoodClickCnt(goodClickCntCopy);
              }}>👍 {props.goodClickCnt[i]}</span> 
              <div>
                
                {/* 삭제 버튼 */}
                <Button variant="secondary" onClick={()=> {
                  let titleArrCopy = [...props.titleArr];
                  titleArrCopy.splice(i, 1);
                  props.setTitleArr(titleArrCopy);

                  let granpaNameArrCopy = [...props.granpaNameArr];
                  granpaNameArrCopy.splice(i, 1);
                  props.setGranpaNameArr(granpaNameArrCopy);

                  let goodClickCntCopy = [...props.goodClickCnt];
                  goodClickCntCopy.splice(i, 1);
                  props.setGoodClickCnt(goodClickCntCopy);
              }}>삭제</Button>
              </div>
              
            </div>
          )
        })
      }
    </div>
  )
}

// 농장 세부 사항 모달
function FarmDetailModal(props) {
  return (
    <div className="detailmodal">
      <h4>{props.titleArr[props.title] } 농장 </h4>
      <p>{props.granpaNameArr[props.title]} 할배</p>
      <p>상세내용</p>
    </div>
  )
}

// 농장 추가 모달
function FarmInputModal(props) {
  
  // 농장 추가하기
  let farmRegister = () => {
    let titleArrCopy = [...props.titleArr];
    titleArrCopy.push(props.fruitsName);
    props.setTitleArr(titleArrCopy);

    let granpaNameArrCopy = [...props.granpaNameArr];
    granpaNameArrCopy.push(props.farmerName);
    props.setGranpaNameArr(granpaNameArrCopy);

    let goodClickCntCopy = [...props.goodClickCnt];
    goodClickCntCopy.push(0);
    props.setGoodClickCnt(goodClickCntCopy);

  }
  
  return (
    <div className='modalContainer'>
      <input type='text' placeholder='과일명' onChange={ (e)=>{ 
        props.setFruitsName(e.target.value);
      }}/>
      <input type='text' placeholder='할매/할매 이름' onChange={(e)=>{
        props.setFarmerName(e.target.value);
      }}/>
      <Button variant='primary' onClick={farmRegister}>등록</Button>
    </div>
  )
}


export default App;
