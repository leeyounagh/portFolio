import React, { useState } from 'react';

const History = () => {

    const [next,setNext] =useState(1);
    const [next2,setNext2] =useState(false)

    const NextHandler = () =>{
        setNext(next+1)
    }
    const prevHandler = () =>{
        setNext(next-1)
    }
    const NextHandler2 = () =>{
        setNext2(true)
    }
    const prevHandler2 = () =>{
        setNext2(false)
    }
    const secondPageRenderer = () =>{
        return(
            <div style={{position:"relative",left:"280px",
            top:"-30px"}}>
               <h4>프로젝트 설명</h4>
                <h6>  전공이 관광학과다보니 여행관련 앱은 꼭 만들고 싶었고, 
                공부를 하면서 틈틈히 설계를 하였습니다. CRUD모두 가능하게끔 구현하였고,
                유저의 입장에서 필요하다고 생각한 부분은 모두 구현하였습니다. 
                최대한 라이브러리의 힘을 빌리고 싶지않아 90%는 제가 직접 구현한 프로젝트 입니다.


                

                </h6>
      
           <h6> 
            TRAVELSPOT페이지: 제주도의 서귀포시 제주시로 나누어 각각 맛집,관광지,쇼핑지,숙박업소들을
            검색할수도 있고, 클릭하면 상세페이지가 나와 정보를 볼수 있으며, 마음에 드는곳을 찜을 하여
            찜리스트에서 한눈에 볼수있고, 삭제또한 가능합니다. 비짓제주api를 이용하였습니다.
        
           </h6>
          <h6>
          NEWSPAGE: 제가 직접 가본곳들을 영상으로 제작하였고, 비디오 클립기능을 구현하였습니다. 또한 제가 직접 가본곳들의 사진들을
            3D갤러리로 보여드리고 있습니다. 페이지 하단에는 관광지,맛집,쇼핑지,숙박업소를 추천하고, 지도에서 직접 볼수 있는 기능또한 구현하였습니다.
            비짓제주 api,google api를 이용하였습니다.
          </h6>
           
            <button onClick={prevHandler}>prev</button>
            <button onClick={NextHandler}>Next</button>
            </div>
        )
    }
   
    const hellojejuthird = () =>{
        return (
            <div style={{position:"relative",left:"280px",
            top:"0px"}}>
 <h6> 
            커뮤니티 페이지: 유저간 제주도 여행 정보 공유하고, 친목도 다질수 있는 커뮤티티 페이지를 구현했습니다.
            상단에는 최신게시물을 슬라이드로 볼수 있게끔 기능을 추가하였고, 게시글을 직접 쓸수 있고, 유저가 직접 댓글도 달수 있습니다.
            하단에는 게시글 제목명, 유저 아이디를 검색할수있는 기능도 구현하였습니다.
        
           </h6>
          <h6>
          MyTravel: auth 컴포넌트에서 유저의 정보를 받아와 유저이름, 이메일을 볼수 있고 ,여행스케쥴을 직접 설정해서 추가, 삭제 할수있습니다.
          또한, 유저 여행스타일도 설정 할수 있습니다.
          </h6>
           
            <button onClick={prevHandler}>prev</button>
            </div>
        )
    }
    const secondPageRenderer2 = ( ) =>{
        return(
            <div>
                <h4>프로젝트 설명</h4>
                <h6>리액트 공부후 제대로된 홈페이지를 만들고 싶어 만든 첫 프로젝트 입니다.
                    CRUD를 구현하고 싶어 몽고디비와 nodeexpress를 공부후 프록시서버로 연결하였습니다.
                    빈티지 소품을 파는 쇼핑몰로, 유저들이 직접 상품을 올릴수도 있고, 구매도 가능하게끔 구현하였습니다.
                    결제는 페이팔 테스트결제를 이용하여 가상으로 결제도 할수있게끔 구현했습니다.
                </h6>
                 <button onClick={prevHandler2}>prev</button>
            </div>
        )
    }
    return (
        <div  >
            {/* 헬로우 제주 */}
            <div style={{display:"flex",justifyContent:"center"}}>
            <div style={{width:"80%",height:'400px',margin:'60px',}}>
          <div style={{display:"flex",justifyContent:"space-around",margin:"50px"}}>
          <video style={{width:'500px',position:'absolute',
         left:"180px",top:'180px' }} id="vid" src="video/헬로우제주.mp4" controls></video>

          <div style={{width:"350px"}}>
          
          {
            next===1?<div style={{position:"relative",left:"280px",
            top:"0px"}}>
                <h3>HELLO JEJU</h3>
                 <h6>제작기간:2022.06.01~2022.07.31 2개월</h6>
           <h6> 사용언어: HTML,CSS,JS,REACT,MONGODB,NODEJS</h6>
           <h6>링크:</h6>
           <h6>
           <a href='https://github.com/leeyounagh/travelapp'>깃허브로 이동</a>
           
           </h6>
        
           
         <h6>영상에 자막이 있으므로 부디 전체화면으로 시청 부탁드립니다.🙏</h6>
           <button onClick={NextHandler}>
              Next
           </button>
           </div>:next===2?<div>{secondPageRenderer()}</div>:<div>{hellojejuthird()}</div>
          }
          
            
            {/* 2번째베이지 */}
            {/*  */}
          </div>
        
          </div>
           
        
          
     
            </div>

            </div>


            {/* 쇼핑몰 */}
            <div style={{display:"flex",justifyContent:"center"}}>
            <div style={{width:"80%",height:'400px',margin:"60px"}}>
             <div style={{display:"flex",justifyContent:"space-around",margin:"50px"}}>
             <video style={{width:'500px', }} id="vid" src="video/쇼핑몰.mp4" controls></video>
             <div style={{width:"350px"}}>
                {
                    next2?<div>{secondPageRenderer2()}</div>:
                   <div>
                   
                       <h6>제작기간:2022.05.01~05.31 한달</h6>
              <h6> 사용언어: HTML,CSS,JS,REACT,MONGODB,NODEJS</h6>
            
            <h6>깃허브에서 clone한후 터미널을 켜서 global로 npm install, cd client 엔터하신후 npm install 하신후
                npm run start 입력하시면 테스트 해보실수 있습니다 🙆‍♀️
                
            </h6>
            <h6><a href='https://github.com/leeyounagh/shoppingmall'>깃허브로 이동</a></h6>
            <button onClick={NextHandler2}>Next</button>
                   </div>
                }
           
                </div>

             </div>
            </div>
            </div>
    
        </div>
    );
};

export default History;