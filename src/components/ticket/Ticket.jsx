import React, { useEffect, useState } from 'react'
import './ticket.css'
import { getCaller } from '../../services/api'

const Ticket = () => {
    const [ticketData,setTicketData] = useState([])
    const getTicketData = async ()=>{
        const res  = await getCaller('findOrder')
        console.log(res)
        setTicketData(res.data)
    }
    useEffect(()=>{
        getTicketData()
    },[])
    console.log(ticketData)
    return (
        <section className='ticket-container'>
            {
                ticketData.length>0 ? ticketData.map((el,i)=>(
                    <div className='ticket-card'>
                    <div className='same-all'> <p className='same-all-p'>Ticket Id :-</p> <p>{el._id}</p> </div>
                    <div className='same-all'><p className='same-all-p'> Created By :-</p> <p>{el?.user?.user_id}</p> </div>
                    <div className='same-all'> <p className='same-all-p'>Status :-</p> <p>{el?.user?.user_id}</p></div>
                    <div className='same-all'> <p className='same-all-p'>Assigned to :-</p> <p>{el?.user?.user_id}</p> </div>
                    <div className='same-all'> <p className='same-all-p'>Title :-</p> <p>{el?.user?.user_id}</p> </div>
                    <div className='same-all'> <p className='same-all-p'>Description -</p> <p>{el?.user?.user_id}</p> </div>
                    </div>
                )):null
            }
        
        </section>

    )
}

export default Ticket
