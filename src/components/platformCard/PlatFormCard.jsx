import React from 'react'
import { GiCheckMark } from 'react-icons/gi'
import '../platformCard/platformcard.css'
const PlatFormCard = () => {
  return (
    <div className='ticket-card-body'>
      <div className="ticket-price-content">
        <p>Premiuim</p>
        <p> 300$ </p>
        <p>Monthly</p>
      </div>
      <div className="ticket-footer">
        <div className="ticket-footer-body">
          <p> < GiCheckMark /> 4 CPU Core </p>
          <p> < GiCheckMark />5 RAM</p>
          <p> < GiCheckMark /> 43 SSD RAID 10</p>
          <p> < GiCheckMark /> 134 bandwidth</p>
        </div>
        <div className="ticket-button">
          <button type='button' className='button' > Purchase </button>
        </div>
      </div>
    </div>
  )
}

export default PlatFormCard