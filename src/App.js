import './App.css'
import { useState } from 'react';
import data from './data.js';
function App() {

  let [titleArr, setTitleArr] = useState(['사과', '망고스틴', '청포도']);
  let [granpaNameArr, setGranpaNameArr] = useState(['성민', '수현', '지훈']);
  let [goodClickCnt, setGoodClickCnt] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <div>과일 파는 사람들</div>
      </div>
        <Modal modal = {modal} setModal={setModal} setTitle={setTitle} titleArr={titleArr} setGoodClickCnt={setGoodClickCnt} granpaNameArr={granpaNameArr} goodClickCnt={goodClickCnt}/>
        

      <div className="listContainer">
        <div>
          <button onClick={() => {
            let copy = [...titleArr];
            copy[0] = '배다골';
            setTitleArr(copy);
            }}>배다골 버튼</button>
        </div>
        <div>
          <button onClick={() => {
            let copy = [...titleArr];
            copy.sort();
            setTitleArr(copy);
            }}>정렬 버튼</button>
        </div>
        <div>
          <button onClick={() => {
            setModal(!modal);
            }}>글제목</button>
        </div>
      </div>
      {
        modal == true ? <Modal3 titleArr={titleArr} title={title} granpaNameArr={granpaNameArr}/>: null
      }
    </div>
  );
}

function Modal(props) {
  return (
  <div className="listContainer">
        {
          props.titleArr.map((a,i)=> {
            return (
            <div className="list">
              <h4 onClick={()=> {props.setModal(!props.modal); props.setTitle(i)}}>{a} 농장</h4>
              <p>{props.granpaNameArr[i]} 할매</p>
              <span className='clickBtn' onClick={()=> {
                let goodClickCntCopy = [...props.goodClickCnt];
                goodClickCntCopy[i] += 1;
                props.setGoodClickCnt(goodClickCntCopy);
              }}>👍</span> {props.goodClickCnt[i]}
            </div>
            )
          })
        }
  </div>
  )
}

function Modal3(props) {
  return (
    <div className="modal">
      <h4>{props.titleArr[props.title] } </h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

function goodClickbtn(props) {
}

export default App;
