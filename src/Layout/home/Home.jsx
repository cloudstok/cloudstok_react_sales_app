import React from 'react'
import Layout from '../Layout'
import SliderComponent from './Slider/SliderComponent'
import PlatformConfiguration from './platform/PlatformConfiguration'
import MangeServiceConfiguration from './configurationManageSupport/ManageServiceConfiguration'
import Progress from '../Progress'

const Home = () => {
  return (
    <Layout>
      <PlatformConfiguration />
      
      <SliderComponent />


      {/* <Login/> */}
    </Layout>
  )
}

export default Home