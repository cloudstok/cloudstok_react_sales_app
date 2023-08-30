import React from 'react'
import Layout from '../Layout'
import PlatformConfiguration from './platform/PlatformConfiguration'
import MangeServiceConfiguration from './configurationManageSupport/ManageServiceConfiguration'
import SliderComponent from '../../components/slider/SliderComponent'
import Ticket from '../../components/ticket/Ticket'


const Home = () => {
  return (
    <Layout>
    <PlatformConfiguration/>
  <MangeServiceConfiguration/>
  <SliderComponent/>
  <Ticket/>
    </Layout>
  )
}

export default Home