import { Button  } from 'react-bootstrap';

// 농장 리스트 컴포넌트
function FarmList(props) {
  
    return (
      <div className="listContainer">
        {
          props.farmData.map((a,i)=> {
            return (
              // 농장 정보 리스트
              <div className="list">
                <div id='img_div' style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/`+i +`.jpg)` }}></div>
                <h4 className='makeCursor' onClick={()=> {
                    props.setFarmDetailModal(true);
                    props.setTitle(i);
                  }
                  }> {a.fruits} 농장</h4>
                <p>{a.farmerName} 할배</p>
                <p>{a.call}</p>
                {/* 좋아요 버튼 */}
                <span className='clickBtn' onClick={()=> {
                    let goodClickCntCopy = [...props.goodClickCnt];
                    goodClickCntCopy[i] += 1;
                    props.setGoodClickCnt(goodClickCntCopy);
                  }}>👍 {props.goodClickCnt[i]}
                </span>
                {/* 삭제 버튼 */}
                <Button className='deleteBtn' variant="secondary" onClick={()=> {
                  let farmDataCopy = [...props.farmData];
                  farmDataCopy.splice(i, 1);
                  props.setFarmData(farmDataCopy);
  
                  let goodClickCntCopy = [...props.goodClickCnt];
                  goodClickCntCopy.splice(i, 1);
                  props.setGoodClickCnt(goodClickCntCopy);
                }}>삭제</Button>
                <div>
                  
  
                </div>
                
              </div>
            )
          })
        }
      </div>
    )
  }

export default FarmList
