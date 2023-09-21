import React from 'react'
import Layout from '../../Layout/Layout'
import MyTicket from '../myTicket/MyTicket'
import Ticket from '../../components/ticket/Ticket'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
  
  return (
    <Layout>
<section>
<h1 style={{color:"black"}}>My Ticket</h1>
<Ticket/>
{/* <button type='button' className='button' >LogOut</button> */}
</section>
    </Layout>
  )
}

export default Profile