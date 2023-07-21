import { useParams } from "react-router-dom";
import styled from 'styled-components';
import { useState, useEffect } from 'react';



let YellowBtn = styled.button`
    background:${props => props.bg};
    color:${props => props.bg == 'blue'?'white':'black'};
    padding:10px;
    `
    
function Detail(props) {

    useEffect(()=> {
        console.log('안녕');
    })
    // 이거 왜쓰냐? 
    // 1. 이 안에 있는 코드는 html 렌더링 이후 동작하기 때문에.
    // so 10000개짜리 for문 돌리는 것 같이 오래걸리는 걸 useEffect에 넣어서 하면 좀 나아.
    let [count, setCount] = useState(0);

    
    let {id} = useParams();
    let findItem = props.shoes.find(function(x) {
        return x.id == id;
    })

    return (
        <div className="container" key={props.id}>
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
        </div> 
    )
}

export default Detail;