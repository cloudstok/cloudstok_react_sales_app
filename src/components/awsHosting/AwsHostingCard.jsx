import React, { useState } from 'react'
import linux from '../../assets/images/linux.png'
import window from '../../assets/images/window.png'
import '../platformCard/platformcard.css'
import '../awsHosting/awshosting.css'
import PlatFormCard from '../platformCard/PlatFormCard'

const AwsHostingCard = () => {
    const [index,setIndex] = useState(0)
    const [activeIndex,setActiveIndex] = useState('linux')
    const [platformData,setPlatformData] = useState([])
    return (
        <section className=''>
        <div className="tab-container">
          <div className="">
          <h1 style={{color:"black"}}>AWS Hosting </h1>
          <div className="platform-tab">
            <div className={`platform-tab-content ${activeIndex==='linux'?'link-active':''}`}  onClick={() => setActiveIndex('linux')}>
              <img src={linux} alt='' width={70} height={70}/>
              <div className="platform-name">
              <p>(O.S)</p>
                <p>Linux</p>
              </div>
            </div>
            <div  id='window' className={`platform-tab-content ${activeIndex==='windows'?'link-active':''}`}  onClick={() => setActiveIndex('windows')}>
              <img src={window} alt='' width={70} height={70} />
              <div className="platform-name">
              <p>(O.S)</p>
                <p>Windows</p>
              </div>
            </div>
          </div>
        <div className="tab-head">
          <div className={`link-tab ${index===0?'link-active':''}`} onClick={()=> setIndex(0) }> <p>Monthly</p> </div>
          <div className={`link-tab ${index===1?'link-active':''}`} onClick={()=> setIndex(1) }> <p>Quarterly</p> </div>
          <div className={`link-tab ${index===2?'link-active':''}`} onClick={()=> setIndex(2) }> <p>Yearly</p> </div>
        </div>
          </div>
      </div>
      <div className="ticket-card-container">
      {/* {filterData().map((cardData,i) => ( */}
          <PlatFormCard 
          />
          {/* ))} */}
      </div>
       </section>
    )
}

export default AwsHostingCard
