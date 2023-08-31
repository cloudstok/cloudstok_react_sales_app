import React from 'react'
import Layout from '../Layout'

// import Slider from './Slider/SliderComponent'
import SliderComponent from './Slider/SliderComponent'
import PlatformConfiguration from './platform/PlatformConfiguration'
import MangeServiceConfiguration from './configurationManageSupport/ManageServiceConfiguration'

import Ticket from '../../components/ticket/Ticket'
import Register from '../../components/Register/Register'
import Login from '../../components/login/Login'


const Home = () => {
  return (
    <Layout>
    <PlatformConfiguration/>
  <MangeServiceConfiguration/>
  <SliderComponent/>
  <Ticket/>
  <Register/>
  {/* <Login/> */}
    </Layout>
  )
}

export default Home