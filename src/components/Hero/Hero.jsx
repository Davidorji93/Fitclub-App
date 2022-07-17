import React from 'react'
import './hero.css'
import Header from '../Header/Header'
import HERO_IMG from '../../assets/hero_image.png'
import HERO_IMG_BACK from  '../../assets/hero_image_back.png'
import HEART from '../../assets/heart.png'
import CALORIES from '../../assets/calories.png'
import {motion} from 'framer-motion'
import NumberCounter from 'number-counter'

const Hero = () => {
const transition = {type: 'spring', duration  : 3}
const mobile = window.innerWidth<=768 ? true: false;
  return (
   <div className="hero" id='home'>
    <div className='blur hero-blur'></div>
    <div className="left-hero">
        <Header/>
        <div className="the-best-ad">
            <motion.div 
            initial={{left: mobile? "165px": '238px'}}
            whileInView={{left: '8px'}}
            transition={{...transition, type: 'tween'}}>
            </motion.div>
            <span>the best fitness club in town</span>
        </div>
        <div className="hero-text">
            <div><span className='stroke-text'>Shape </span>
            <span>Your</span>
        </div>
        <div>
         <span>ideal body</span>
        </div>
        <div>
         <span>
            In here we will help you shape and build your ideal live up your life to the fullest
       </span>   
        </div>
        </div>
        <div className="figures">
            <div>
                <span>
                    <NumberCounter end={140} start={70} delay='4' preFix='+'></NumberCounter>
                </span>
                <span>expert coaches</span>
            </div>
            <div>
                <span>
                <NumberCounter end={978} start={800} delay='4' preFix='+'></NumberCounter>
                </span>
                <span>members joined</span>
            </div>
            <div>
               <span>
               <NumberCounter end={50} start={0} delay='4' preFix='+'></NumberCounter>
               </span>
               <span> programs</span>
            </div>
        </div>
        <div className="hero-buttons">
            <button className='btn'>Get Started</button>
            <button className='btn'>Learn More</button>
        </div>
    </div>
    <div className="right-hero">
        <button className='btn'>Join Now</button>
        <motion.div
         initial={{right: "-1rem"}}
         whileInView={{right: "4rem"}}
         transition={transition}
         className="heart-rate">
            <img src={HEART} alt="" />
            <span>Heart Rate</span>
            <span> 116 bpm</span>
            </motion.div>
            <img src={HERO_IMG} alt=""  className='hero-image'/>
            <motion.img 
             initial={{right: "11rem"}}
             whileInView={{right: "20rem"}}
             transition={transition} 
             src={HERO_IMG_BACK} alt=""  className='hero-img-back'/>

       <motion.div
        initial={{right: "37rem"}}
        whileInView={{right: "28rem"}}
        transition={transition}
        className="calories">
            <img src={CALORIES} alt="" />
          <div>
            <span>Calories burned</span>
            <span>220 Kcal</span>
     </div>
     </motion.div>       
    </div>
   </div>
  )
}

export default Hero