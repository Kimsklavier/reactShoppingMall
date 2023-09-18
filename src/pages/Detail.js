import { Routes, Route, Link, useNavigate, Outlet, useParams } from 'react-router-dom'
import {useEffect} from 'react';

function Detail(props) {
    let {id} = useParams();
    let findedFarmer = props.farmData.find(function(x) {
        return x.id == id;
    })

    useEffect(function() {
        //여기적은 코드는 컴포넌트 로드 & 업데이트 마다 실행됨
        console.log('안녕')
    });
    return (
      <div className="container">
        <div className="row">
            <div className="col-md-6">
                <h4 className="pt-5">{findedFarmer.fruits} 농장 </h4>
                <p>{findedFarmer.farmerName}</p>
                <p>{findedFarmer.call}</p>
                <p>{findedFarmer.goodClickCnt}</p>
                <button className="btn btn-danger">주문하기</button> 
            </div>
        </div>
        <Outlet></Outlet>
      </div> 
    )
}

export default Detail
