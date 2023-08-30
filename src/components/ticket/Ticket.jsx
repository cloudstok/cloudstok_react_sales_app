import React from 'react'
import './ticket.css'

const Ticket = () => {
    return (

        <section className='ticket-container'>
            <div className='ticket-card'>
                <div className='same-all'> Ticket Id  </div>
                <div className='same-all'> Assigned to  </div>
                <div className='same-all'> Created By  </div>
                <div className='same-all'> Attachment <button className='button' type= "button">Submit</button> 
                
                 </div>


            </div>

        </section>

    )
}

export default Ticket
