import React from 'react'
import './plans.css'
import {plansData} from '../../data/plansData'
import whiteTICK from '../../assets/whiteTick.png'
import {MdArrowRightAlt} from 'react-icons/md'

const Plans = () => {
  return (
   <div className="plans-container" id='plans'>
    <div className="blur plans-blur-1"></div>
    <div className="blur plans-blur-2"></div>
    <div className="programs-header" style={{gap: '2rem'}}>
        <span className='stroke-text'>READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className='stroke-text'>WITH US</span>
    </div>
    <div className="plans">
     {plansData.map((plan, i)=>(
        <div className="plan" key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>$ {plan.price}</span>
            <div className="plans-features">
                {plan.features.map((feature, i)=>(
             <div className="plans-feature">
             <img src={whiteTICK} alt="" />
             <span key={i}>{feature}</span>
             </div>
              ))}
            </div>
            <div>
                <span>see more benefits <MdArrowRightAlt/></span>
            </div>
            <button className="btn">Join Now</button>

        </div>
     ))}
    </div>
   </div>
  )
}

export default Plans