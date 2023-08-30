import React from 'react'
import Layout from '../Layout'

// import Slider from './Slider/SliderComponent'
import SliderComponent from './Slider/SliderComponent'
import PlatformConfiguration from './platform/PlatformConfiguration'
import MangeServiceConfiguration from './configurationManageSupport/ManageServiceConfiguration'



const Home = () => {
  return (
    <Layout>
    <PlatformConfiguration/>
  <MangeServiceConfiguration/>
  <SliderComponent/>
    </Layout>
  )
}

export default Home