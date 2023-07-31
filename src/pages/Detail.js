import { useParams } from "react-router-dom";
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { Button, Nav, Navbar, Container, Tab } from 'react-bootstrap';



let YellowBtn = styled.button`
    background:${props => props.bg};
    color:${props => props.bg == 'blue'?'white':'black'};
    padding:10px;
    `
    
function Detail(props) {
    let [탭, setTab] = useState(0);

    let [count, setCount] = useState(0);

    let {id} = useParams();
    let findItem = props.shoes.find(function(x) {
        return x.id == id;
    })
    let [alert, setAlert] = useState(true);

    useEffect(()=> {
        // let makeTimer = setTimeout(()=> {
        //     setAlert(false);
        // }, 2000)
        // console.log(2);
        
        // 이 콜백 함수에 작성한 코드는 mount & update 때 마다 실행됨.
        // 렌더링 "이후"에 동작.
        console.log('하세요');

        // 반환함수는 unmount 시점에 실행됨. 
        return () => {
            console.log('안녕');
            // clearTimeout(makeTimer);
        }
    }, [])
    // 여기서는  [ ]에 있는 변수나 state 가 변할 때만 useEffect 안에 있는 콜백함수의 코드 실행.
    // 즉 로드시(mount) 한 번 실행하고,
    // 그 이후 [ ]에 있는 변수or state가 변할 때(update) 실행.
    // 최초에는 '하세요' 가 출력되고,
    // count가 변할 때(unmount)

    // [] 에는 변수가 없기 때문에 update 될 때에는 useEffect 안에 있는 코드 실행 X

    // 이거 왜쓰냐? 
    // 1. 이 안에 있는 코드는 html 렌더링 이후 동작하기 때문에.
    // so 10000개짜리 for문 돌리는 것 같이 오래걸리는 걸 useEffect에 넣어서 하면 좀 나아.


    return (
        <div className="container" key={props.id}>
            {alert == true ?
            <div className='alert alert-warning'>
                2초 이내 구매시 할인
            </div> : null
            }

            <div className="row">
                <div className="col-md-6">
                    <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
                    <YellowBtn bg='white' onClick={() => setCount(count+1)}>버튼</YellowBtn>
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{findItem.title}</h4>
                    {count}
                    <p>{findItem.content}</p>
                    <p>{findItem.price}</p>
                    <button className="btn btn-danger">주문하기</button> 
                </div>
            </div>

            <Nav variant="tabs"  defaultActiveKey="link0">
          <Nav.Item>
            <Nav.Link eventKey="link0" onClick={()=> {
                setTab(0);
            }}>버튼0</Nav.Link>
          </Nav.Item>
          <Nav.Item>
          <Nav.Link eventKey="link1" onClick={()=> {
                setTab(1);
            }}>버튼1</Nav.Link>
          </Nav.Item>
          <Nav.Item>
          <Nav.Link eventKey="link2" onClick={()=> {
                setTab(2);
            }}>버튼2</Nav.Link>            
          </Nav.Item>
      </Nav>
      <TabContent 탭={탭}/>
        </div> 
    )
}

function TabContent(props) { // props 대신 {탭} 만 가져오면 
if(props.탭 == 0) {  // 여기 조건문에 그냥 탭 == 0 이라고 써도 된다.
    return <div>내용0</div>
  } else if (props.탭 == 1) {
    return <div>내용1</div>
  } else {
    return <div>내용2</div>  
  }

  // 또는 
  // [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>] [탭] 으로 쓸 수도 있다.
}

export default Detail;