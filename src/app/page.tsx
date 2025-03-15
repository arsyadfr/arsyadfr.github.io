'use client'
import Image from "next/image";
import styles from "./page.module.css";
import * as React from "react";

export default function Home() {

const social = [
  {
    logo: require('./media/Instagram, Negative.svg'),
    link: 'https://www.instagram.com/arsyadffr'
  },
  {
    logo: require('./media/WhatsApp, Negative.svg'),
    link: 'https://wa.me/62081315782942'
  },
  {
    logo: require('./media/Vector (1).svg'),
    link: 'mailto:frarsyad@gmail.com'
  },
  // {
  //   logo: require('./media/LinkedIn, Negative.svg'),
  //   link: ''
  // },
]

const worked=[
 { 
   img: require('./media/logo/82.jpg'),
  alt: 'SMAN 82 JAKARTA'
}, 
{ 
  img: require('./media/logo/daf.png'),
  alt: 'dafest'
},
{ 
  img: require('./media/logo/algeb.png'),
  alt: 'Algebra Smart Edu'
},
{ 
  img: require('./media/logo/pedra.png'),
  alt: 'Pedra'
},
{ 
  img: require('./media/logo/psc.png'),
  alt: 'Postcard From'
},
{ 
  img: require('./media/logo/osi.png'),
  alt: 'Osis SMAN 82 Jakarta'
},
]

const skills=[
  { 
   img: require('./media/logo/2nj.png'),
   alt: 'Next JS'
 }, 
 { 
   img: require('./media/logo/fb.png'),
   alt: 'Firebase'
 },
 { 
   img: require('./media/logo/py.png'),
   alt: 'Python'
 },
 { 
   img: require('./media/logo/rnn.png'),
   alt: 'React Native'
 },
 { 
   img: require('./media/logo/rn.png'),
   alt: 'React JS'
 }
 ]

  const data = [
    {
      title: 'Postcard From',
      image: require('./media/postk.png'),
      desc: 'Describe what home is for many people and give them to express their feelings about home.'
   , link: 'https://postcardfrom.web.app/'
    },
    {
      title: 'Dahafest',
      image: require('./media/dafest.png'),
      desc: 'Daha Festival 2024 Scoreboard for matches inside the event.'
   , link: 'https://dahafest82.web.app/'
    },
    {
      title: 'Algebra Smart Edu',
      image: require('./media/algeb.png'),
      desc: 'Algebra Smart Education private tutoring profile sites.'
   , link: 'https://www.algebrasmarteducation.com/'
    }
  ]

  function Ocev (e:any) {
    if((e.target.scrollHeight - e.target.scrollTop - 200 < e.target.clientHeight) === true ){
        document.getElementById('ix')?.setAttribute('style', 'bottom: 40px;');
    }
    else{
        document.getElementById('ix')?.setAttribute('style', 'bottom: -40px;');
    }
    
}

  return (
   <div className="container" id="cnt" onScroll={Ocev}>
    <div className="background"></div>
    <div className="classes">
      <h1 className="hia-1">Hi, Im Arsyad!</h1>
      <h2 className="hia-2">A Web Developer.</h2>
      <p className="pfd pd">A highly motivated junior web developer with 2 years of freelance experience, actively seeking opportunities to expand knowledge and skills, while currently pursuing education as a highschool student at the age of 16.</p>
    </div>
    <div className=" ble classes" >
      <p className="pfd sw">Selected Work</p>
      <div className="tablerow">{data.map((item, index)=>{
        return(
          <div key={index} onClick={()=>window.open(item.link)} className="table">
            <Image className="tmb" src={item.image} alt='thumbnail'/>
            <p className=" table-title">{item.title}</p>
            <p className="pfd td">{item.desc}</p>
          </div>
        )
      })}</div>
      <div className="smc"><div onClick={()=>window.location.assign('/projects')} className="sm"><p>See More</p></div></div>
    </div>

    <div className="classes gx">
      <p >Trusted By</p>
      <div className="imgrow t">{worked.map((item, index)=>{
        return(
        <Image key={index} src={item.img} alt={item.alt} className="img"/>
      )})}</div>
      <p>Workskills</p>
      <div className="imgrow x">{skills.map((item, index)=>{
        return(
        <Image key={index} src={item.img} alt={item.alt} className="img"/>
      )})}</div>
    </div>
    <div className="classes n" id="prc">
      <div id="profile" className="row-know" >
        <Image src={require('./media/Group 7 (1).png')} alt="Profile" className="prof"/>
        <div>
          <p className="get-to-know">Who is <span id="v">Arsyad </span>?</p>
        <p className="paragraph">Hi im <span id="v">Arsyad Faiz,</span> a dedicated high school student at SMAN 82 Jakarta with a deep passion for technology and web development. Alongside my studies, I work as a freelance web developer, actively seeking new opportunities to collaborate with clients and deliver high-quality digital solutions. I am always eager to expand my knowledge and skills, constantly striving to stay ahead in the ever-evolving world of web development.
<br/><br/>
I embrace new challenges and technologies to further enhance my expertise. As a freelancer, I am committed to providing professional services that meet my client's needs, ensuring innovative solutions and exceptional results.</p>
     </div>
      </div>
    </div>
    <div className="classes ">
    <div className="row-know" id="git">
    <p  className="get-to-know" id="gtk">Get In<br/>Touch<br/>With Me!</p>
    <div className="getint">
      <p className="pfd">Feel free to get in touch if you're interested in collaborating or working together!</p>
    <div className="medrow">{social.map((item, index)=>{
      return(
        <Image key={index} onClick={()=>{}} alt="media" className="media" src={item.logo}/>
      )
    })}
    </div>
    </div>
    </div>
  
    </div> 
     <p className="cp">© 2025 Arsyad Faiz</p>
     <Image onClick={()=>document.getElementById('cnt')?.scrollTo({top: 0, behavior: 'smooth'})} src={require('./media/image (8).png')} alt="back" id="ix" className="backh"/>
   </div>
)}