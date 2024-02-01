import { useState } from 'react'
import images from './podcast-cover.jpg'
import music from './pause.png'
import onex from './play-1x.png'
import { HiBookmark } from "react-icons/hi2";
import { RiSkipBackMiniFill } from "react-icons/ri";
import { MdSkipNext } from "react-icons/md";
function App() {
  
  return (
    <>
    <div className='flexdispaly'>

      <div class="card">
    <div class="card-header">
      <div className='imageflex'>
        <img  className='Imageicon' src={images} alt="" />
        <div style={{display:"flex" ,flexDirection:'column',justifyContent: "left"}}>
        <span className='spantag'>Ep. <span>128</span></span>
        <span style={{ color:'#8e99b5',fontFamily:'sans-serif',margin:'11px 0px',textAlign:'left'}}>Scaling CSS at Heroku with Unility Classes</span>
        <span className='fullstack'>Full Stack Radio</span>
        </div>
      </div>
        <input className='rangeline' type="range" min={50}  max={100}/>
        <div className='timer'>
          <span>28:16</span>
          <span>28:16</span>
        </div>
    </div>
    <div class="card-content">
    <HiBookmark style={{fontSize:'x-large'}} />
    <RiSkipBackMiniFill style={{fontSize:'xx-large'}} />
     <span className='extra'> <img className='music' src={music} alt="" /></span>
    <MdSkipNext style={{fontSize:'xx-large'}} />
    <img src={onex} alt="" style={{width:'30px'}} />
    </div>
  </div>
    </div>
    </>
  )
}

export default App
