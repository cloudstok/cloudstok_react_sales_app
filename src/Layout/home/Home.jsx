import React from 'react'
import Layout from '../Layout'
import PlatformConfiguration from './platform/PlatformConfiguration'
import MangeServiceConfiguration from './configurationManageSupport/ManageServiceConfiguration'
import SliderComponent from '../../components/slider/SliderComponent'


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