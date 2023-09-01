import React from 'react'
import { GiCheckMark } from 'react-icons/gi'
import { Link, useNavigate } from 'react-router-dom';
const PlatformCard = ({index,cardData}) => {
 const navigate= useNavigate()
const platformPrice = index === 0 ? cardData.cost_Monthly : '' || index === 1 ? cardData.cost_Quarterly : "" || index === 2 ? cardData.cost_yearly : '';
const platformCycle = index === 0 ? 'PER MONTH' : '' || index === 1 ? '6 MONTH' : "" || index === 2 ? 'PER YEAR' : ''
  return (
    <div class="wrapper">
    <div class="pricing-table gprice-single">
        <div class="head">
             <h4 class="title">Basic</h4> 
        </div>
        <div class="content">
            <div class="price">
                <p>${platformPrice}</p>
               
            </div>
            <ul>
                <li>< GiCheckMark style={{color:"#006cff"}}/>{cardData.vCPU}CPU Core</li>
                <li>< GiCheckMark style={{color:"#006cff"}} />{cardData.ram}RAM</li>
                <li>< GiCheckMark style={{color:"#006cff"}} />{cardData.storage}SSD RAID 10</li>
                <li>< GiCheckMark style={{color:"#006cff"}}/> {platformCycle} </li>
                <li>< GiCheckMark style={{color:"#006cff"}}/> {cardData.bandwidth}bandwidth</li>

            </ul>
            <div class="sign-up">
                <button type='button' class="btn bordered radius" onClick={()=>navigate('/platformConfiguration',{
             state:{
             planData:cardData
             }
         })} >Purchase</button>
            </div>
        </div>
    </div>
</div>

  //   <div className='ticket-card-body'>
  //   <div className="ticket-price-content">
  //     <p>{cardData.plan}</p>
  //     <p> {platformPrice} </p>
  //     <p>{platformCycle}</p>
  //   </div>
  //   <div className="ticket-footer">
  //     <div className="ticket-footer-body">
  //       <p> < GiCheckMark /> {cardData.vCPU} CPU Core </p>
  //       <p> < GiCheckMark /> {cardData.ram} RAM</p>
  //       <p> < GiCheckMark /> {cardData.storage} SSD RAID 10</p>
  //       <p> < GiCheckMark /> {cardData.bandwidth} bandwidth</p>
  //     </div>
  //     <div className="ticket-button">
  //       <button type='button' className='button' onClick={()=>navigate('/platformConfiguration',{
  //           state:{
  //           planData:cardData
  //           }
  //       })}> Purchase </button>
  //     </div>
  //   </div>
  // </div>
  )
}

export default PlatformCard