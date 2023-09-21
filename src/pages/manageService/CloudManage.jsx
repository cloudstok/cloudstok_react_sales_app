import React from 'react'
import Layout from '../../Layout/Layout'

const CloudManage = () => {
  const genData = [
    {
      genHead:"Cloudstok Assessment Stratgey",
      genPara:"The first step while planning a migration is Assessment. CloudStok uses various tools like AWS Discovery and Migration Evaluator (Formerly TSO Logic) to create a business case and to identify the most cost-effective deployment and purchasing options. Our Assessment begins with on-premises inventory discovery and understanding of application dependencies. We provide an optimized business plan to save your cost, optimize performance and give you a seamless experience while migrating your workload to the cloud."
    },
    {
      genHead:"Application Migration and Modernization",
      genPara:"Cloud Migration goes way beyond provisioning infrastructure on cloud platforms and we believe one must have application expertise to understand complex migration. At CloudStok we have the in-house capability of developing enterprise-grade applications which enables us to understand and execute complex migrations."
    },
    {
      genHead:"DevOps and Automation",
      genPara:"At CloudStok we like to automate everything be it Infrastructure Provisioning or Application Deployment. We support and manage almost all major DevOps tools like Jenkins, Docker, Ansible, GitHub, Bitbucket, AWS Code Pipeline, Azure DevOps, Google Kubernetes Engine, Google Cloud Build, and Google Cloud Source Repositories."
    },
    {
      genHead:"Cloudstok Next-Gen Managed Services",
      genPara:"Our Managed Support team is always there to help you round the clock. At CloudStok we believe in a proactive rather than a reactive approach. We use various services like AWS CloudWatch, Azure Monitor, Data Dog APM, New Relic APM, etc. to monitor Infrastructure and Applications and make sure we have the right kind of logs and insights in case of any event."
    }

  ]

 
  return (
  <Layout>
     <div className="who-we-main-container">
    <section >
<div className="gen-container">
  {
    genData.map((el,i)=>(
    <div className="gen-box-container" key={i}>
      <h2 className="gen-h2" >{el.genHead}</h2>
      <p className="gen-para">{el.genPara}</p>
    </div>
    ))
  }
    
  </div>
  
    </section>
   </div>
  </Layout>
  )
}

export default CloudManage