'use client'
import * as React from "react";
import Image from "next/image";

export default function Projects() {
    const data = [
        {
            title: 'Postcard From',
            image: require('../media/logo/psc.png'),
            desc: 'Describe what home is for many people and give them to express their feelings about home.'
         , link: 'https://postcardfrom.web.app/'
          },
          {
            title: 'Dahafest',
            image: require('../media/logo/daf.png'),
            desc: 'Daha Festival 2024 Scoreboard for matches inside the event.'
         , link: 'https://dahafest82.web.app/'
          },
          {
            title: 'Algebra Smart Edu',
            image: require('../media/logo/algeb.png'),
            desc: 'Algebra Smart Education private tutoring profile sites.'
         , link: 'https://www.algebrasmarteducation.com/'
          },
          {
            title: 'Online Menu',
            image: require('../media/logo/menu.png'),
            desc: 'To order food and beverages just by clicking with your hands'
          , link: 'https://nocon-306d7.web.app/'
          },
          {
            title: 'Daha Election Site',
            image: require('../media/logo/82.jpg'),
            desc: `School organitazion leader election site to choose who is worthy to become the leader`,
            link: 'https://pemilos82preview.web.app/'
          },
          {
            title: 'PEDRA Organization Election',
            image: require('../media/logo/pedra.png'),
            desc: "College organitazion leader election site to choose who is worthy to become the leader"
          ,link: 'https://pedrapreview.web.app/'
          }
        ]

        function Ocev (e:any) {
            if((e.target.scrollHeight - e.target.scrollTop - 100 < e.target.clientHeight) === true ){
                document.getElementById('ix')?.setAttribute('style', 'bottom: 40px;');
            }
            else{
                document.getElementById('ix')?.setAttribute('style', 'bottom: -40px;');
            }
            
        }
// 551.3333435058594
        
return(
    <div className="container bgk" onScroll={Ocev}>
    <div className="background"></div>
    <div className=" blek classes" >
         <p className="pfd y sw">Projects Showcase</p>
         <div className="tablerowg blx">{data.map((item, index)=>{
           return(
             <div key={index} onClick={()=>window.open(item.link)} className="table">
               <Image className="tmbp" src={item.image} alt='thumbnail'/>
               <p className=" table-title">{item.title}</p>
               <p className="pfd td">{item.desc}</p>
             </div>
           )
         })}</div>
      
       </div>
       <p className="cp">© 2025 Arsyad Faiz</p>
       <Image onClick={()=>window.location.assign('/')} src={require('../media/back.png')} alt="back" id="ix" className="backh"/>
       </div>
)
}