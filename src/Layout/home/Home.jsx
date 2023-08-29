import React from 'react'
import Layout from '../Layout'
import PlatformConfiguration from './platform/PlatformConfiguration'
import MangeServiceConfiguration from './configurationManageSupport/ManageServiceConfiguration'


const Home = () => {
  return (
    <Layout>
    <PlatformConfiguration/>
  <MangeServiceConfiguration/>
    </Layout>
  )
}

export default Home