import React, { useState } from 'react';
import './About.css'

const About = () => {

  const [skill,setSkill] =useState([{name:"HTML,CSS,REACT",gage:"80%",progress:'progress-bar',
 progressbg:"progress-bg"},
     {name:"js,REDUX",gage:"75%",
     progress:'progress-bar1',
     progressbg:"progress-bg1"},{name:"MONGODB,NODEJS",gage:"60%",
     progress:'progress-bar2',
     progressbg:"progress-bg2"}])


    const progressBar = () =>{
      return (
        <div>
          {
            skill.map((item)=>{
              return(
                <div style={{margin:"30px"}}>
            
                <h3>  {item.name}  {item.gage}</h3>
              
                <div>
            
                <div class={item.progressbg}>
             
            <div class={item.progress}>
        
                <h3 class="raised"></h3>
              </div>
                
                <h3 class="goal"></h3>
          </div>
                  
                </div>
                </div>
              )
            
            })
          }
               

        </div>
      )
    }
    return (
        <div>
      
         
                    <div style={{display:"flex",justifyContent:"center",}}>
           <div style={{width:"80%",height:"40%",margin:'50px'}}>
           <h1>SKILLS</h1>
            
       {
        progressBar()
       }
       
     



                </div>
            </div>












           <div style={{margin:"150px",display:"flex",justifyContent:'center',}}>
            <div style={{
            width:"80%",height:"300px",display:'flex',justifyContent:"space-around",}}>
              <span>
              <img alt='증명사진' src='image/증명사진.jpg'
                  style={{width:'200px',height:"300px"}}></img>   
              </span>
                
                  <span>
                    <h2>프로필</h2>
                    <h3>2012.02~2014.02 상지대학교 응용물리전자학과 중퇴</h3>
                    <h3>2019.02~2021.02 한국방송통신대학교 관광학과 졸업</h3>
                    <h3>Jlpt n1,TOEIC 620,컴퓨터활용능력 2급 보유</h3>
                   
                    </span>   
            </div>
        
           </div>
           {/* <div style={{display:"flex",justifyContent:'center'}}>
             <div style={{width:"80%",height:"400px",margin:"50px"}}>
                <h2>프론트엔드 개발자를 꿈꾸게 된이유?</h2>
                
                <h5>저는 살면서 제가 가슴속에서 너무 좋고 재밌다고 생각한것이 없었습니다. </h5>
                <h5>2021년 학교를 졸업하기 직전, 일본 지상직업무를 하는 회사에 내정되었고, </h5>
                <h5>코로나로 인하여 1년넘게 대기를 하는상황에 놓였었습니다. 마냥 기다릴수만 없었기에</h5>
                <h5>여러가지 자격증을 공부하며 기다리고 있던와중, 개발자동생에게 생활코딩이라는 유튜버를 소개받았습니다.</h5>
                <h5>생활코딩 유튜버분의 강의를 들으며 직접 만들어 보고 싶다 생각하여 따라 만들어봤고, </h5>
                 <h5>처음으로 살면서 너무 재밌다고 생각한것이 생겼습니다.</h5> 
                 <h5>평생 함께할 직업이기에 내가 좋아하는것을 하면서 일하고 싶다고 생각하였고,  </h5>
                 <h5>많은 고민끝에 내정받았던 지상직업무의 내정사퇴를 요청드렸고,</h5>
                  <h5>2022.03월 부터 본격적으로 독학으로 공부를 하기 시작하였습니다.</h5>
             </div>
           </div> */}
 
       
        </div>
    );
};

export default About;