import React from 'react'

import Layout from '../Layout'
import AwsHostingCard from '../../components/awsHosting/AwsHostingCard'
// import Slider from './Slider/SliderComponent'
import SliderComponent from './Slider/SliderComponent'


const Home = () => {
  return (
    <Layout>
    <AwsHostingCard/>
    <SliderComponent/>
    </Layout>
  )
}

export default Home