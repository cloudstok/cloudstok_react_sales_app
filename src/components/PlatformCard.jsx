import React, { useState } from 'react'
import { GiCheckMark } from 'react-icons/gi'
import { Link, useNavigate } from 'react-router-dom';

const PlatformCard = ({index,cardData,onCardSelect}) => {
 const navigate= useNavigate()
const platformPrice = index === 0 ? cardData.cost_Monthly : '' || index === 1 ? cardData.cost_Quarterly : "" || index === 2 ? cardData.cost_yearly : '';
const platformCycle = index === 0 ? 'PER MONTH' : '' || index === 1 ? '6 MONTH' : "" || index === 2 ? 'PER YEAR' : ''
const [selectedCard, setSelectedCard] = useState(null);

  const handleCardSelect = (card) => {
    setSelectedCard(card);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (selectedCard) {
      onCardSelect(selectedCard);
    }
  };
  return (
   <>
    <div className="wrapper">
    <div className="pricing-table gprice-single">
        <div className="head">
             <h4 className="title">Basic</h4> 
        </div>
        <div className="content">
            <div className="price">
                <p>Rs.{platformPrice}</p>
               
            </div>
            <ul>
                <li>< GiCheckMark style={{color:"#006cff"}}/>{cardData.vCPU}CPU Core</li>
                <li>< GiCheckMark style={{color:"#006cff"}} />{cardData.ram}RAM</li>
                <li>< GiCheckMark style={{color:"#006cff"}} />{cardData.storage}SSD RAID 10</li>
                <li>< GiCheckMark style={{color:"#006cff"}}/> {platformCycle} </li>
                <li>< GiCheckMark style={{color:"#006cff"}}/> {cardData.bandwidth}bandwidth</li>

            </ul>
            
        </div>
    </div>
</div>
     
   </>

 
  )
}

export default PlatformCard