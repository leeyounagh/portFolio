import React, { useState } from 'react';

const History = () => {

    const [next,setNext] =useState(false);

    const NextHandler = () =>{
        setNext(true)
    }
    const prevHandler = () =>{
        setNext(false)
    }

    const secondPageRenderer = () =>{
        return(
            <div>
                <h6>  저는 처음 공부한 순간부터 여행관련 추천 홈페이지를 만들고 싶다 생각했습니다.
                공부를 하면서 틈틈히 설계를 하였고, 만들면서 부족하거나 추가 하고 싶은부분을 채워나갔습니다.
                

                </h6>
      
           <h6> 커뮤니티 페이지:
            TRAVELSPOT페이지:
            NEWSPAGE:
            MYTRAVEL:
           </h6>
           
            <button onClick={prevHandler}>이전</button>
            </div>
        )
    }
    return (
        <div  >
            {/* 헬로우 제주 */}
            <div style={{display:"flex",justifyContent:"center"}}>
            <div style={{border:"1px solid black",width:"80%",height:'400px',margin:'60px',}}>
          <div style={{display:"flex",justifyContent:"space-around",margin:"50px"}}>
          <video style={{width:'500px', }} id="vid" src="video/헬로우제주.mp4" controls></video>

          <div style={{border:"1px solid black",width:"350px"}}>
          <h3>프로젝트 소개</h3>
          {
            next?<div>{secondPageRenderer()}</div>:<div>
                  <h6>제작기간:2022.06.01~2022.07.31 2개월</h6>
            <h6> 사용언어: HTML,CSS,JS,REACT,MONGODB,NODEJS</h6>
            <h6>링크:</h6>
            <h6>깃허브:https://github.com/leeyounagh/travelapp</h6>
          <h6>영상에 자막이 있으므로 부디 전체화면으로 시청 부탁드립니다.🙏</h6>
            <button onClick={NextHandler}>
                다음
            </button>
            </div>
          }
          
            
            {/* 2번째베이지 */}
            {/*  */}
          </div>
        
          </div>
           
        
          
     
            </div>

            </div>


            {/* 쇼핑몰 */}
            <div style={{display:"flex",justifyContent:"center"}}>
            <div style={{border:"1px solid black",width:"80%",height:'400px',margin:"60px"}}>

</div>
            </div>
    
        </div>
    );
};

export default History;