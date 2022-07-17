import React from 'react'
import './reasons.css'
import IMG1 from '../../assets/image1.png'
import IMG2 from '../../assets/image2.png'
import IMG3 from '../../assets/image3.png'
import IMG4 from '../../assets/image4.png'
import NB from '../../assets/nb.png'
import ADIDAS from '../../assets/adidas.png'
import NIKE from '../../assets/nike.png'
import TICK from '../../assets/tick.png'



const Reasons = () => {
  return (
   <div className="reasons" id="reasons">
    <div className="left-reasons">
        <img src={IMG1} alt="" />
        <img src={IMG2} alt="" />
        <img src={IMG3} alt="" />
        <img src={IMG4} alt="" />
    </div>
    <div className="right-reasons">
     <span>some reasons</span>
     <div>
     <span className='stroke-text'>why</span>
     <span> choose us?</span>
     </div>
     <div className="right-reason-details">
     <div>
     <img src={TICK} alt="" />
     <span>OVER 100+ EXPERT COACHES</span>
     </div>
     
     <div>
     <img src={TICK} alt="" />
     <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
     </div>

     <div>
     <img src={TICK} alt="" />
     <span>1 FREE PROGRAM FOR NEW MEMBERS</span>
     </div>

     <div>
     <img src={TICK} alt="" />
     <span>RELIABLE PARTNERS</span>
     </div>
     </div>
     <span className=''>OUR PARTNERS</span>
     <div className="partners-details">
      <img src={NB} alt="" />
      <img src={ADIDAS} alt="" />
      <img src={NIKE} alt="" />
     </div>
   </div>
   </div>
  )
}

export default Reasons