import React from 'react'
import './ticket.css'

const Ticket = () => {
    return (

        <section className='ticket-container'>
            <div className='ticket-card'>
                <div className='ticket1'> Ticket Id -  </div>
                <div className='same-all'> Created By  </div>
                <div className='same-all'> Status </div>
                <div className='same-all'> Assigned to  </div>
                <div className='same-all'> Title  </div>
                <div className='same-all'> Description </div>

                <div className='attach'> Attachment
                    <button className='upload' type='Button'>Upload File </button>
                </div>
                </div>

        </section>

    )
}

export default Ticket
