import React from 'react'
import Layout from '../Layout'
import AwsHostingCard from '../../components/awsHosting/AwsHostingCard'
// import Slider from './Slider/SliderComponent'
import SliderComponent from './Slider/SliderComponent'
import PlatformConfiguration from './platform/PlatformConfiguration'
import MangeServiceConfiguration from './configurationManageSupport/ManageServiceConfiguration'


const Home = () => {
  return (
    <Layout>
    <AwsHostingCard/>
    <SliderComponent/>
    <PlatformConfiguration/>
  <MangeServiceConfiguration/>
    </Layout>
  )
}

export default Home