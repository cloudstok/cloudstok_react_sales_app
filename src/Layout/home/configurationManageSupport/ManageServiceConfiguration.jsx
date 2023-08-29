import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../configurationManageSupport/manageService.css'
import { getCaller } from '../../../services/api'
const ManageServiceConfiguration = () => {
    const navigate = useNavigate()
   
    const [manageServiceData, setManageServiceData] = useState([])
    useEffect(() => {
        getManageServiceData()
    }, [])
    const getManageServiceData = async (i) => {
        const res = await getCaller('findallmanageservices')
        setManageServiceData(res?.data)
    }
    // const routeData = {
    //     route:"/cloud_manage_support",
    //     route:"/cloud_manage_support/enterprise_manage_service",
    //     route:"/cloud_manage_support/dedicated_support",
    //     route:"/cloud_manage_support/cloudstok_next_gen"
    //   }
  return (
  <section>
      <div className="cloud-support-container">
    <h1 style={{ color: "black" }}>Cloudstok  Next-Gen Manage Support</h1>
    <p>
        Please select the package which suites you the most.we provide best in the industry cloud manage services
        to our customers irrespective of the packages that will choose.
    </p>
    <div className="support-row">
        {
            manageServiceData.map((item, i) => (
                <div id="generic_price_table" key={i}>   
                <div className="container">
                    <div className="">
                          <div className='support-column'>
                          <div className="generic_content clearfix">
                              <div className="generic_head_price clearfix">
                                  <div className="generic_head_content clearfix">
                                      <div className="head_bg"></div>
                                      <div className="head">
                                          <span>{item.heading}</span>
                                      </div> 
                                  </div>
                                  <div className="generic_price_tag clearfix">	
                                      <span className="price">
                                          <span className="currency">{'$' +item.amount}</span>
                                          <span className="cent">.99</span>
                                          <span className="month">/MON</span>
                                      </span>
                                  </div>
                              </div>                            
                              <div className="generic_feature_list">
                                <ul>
                                    <li>{item.bandwidth}</li>
                                      <li> {item.storage} </li>
                                      <li> {item.accounts} </li>
                                      <li> {item.host} </li>
                                      <li> {item.support} </li>
                                  </ul>
                              </div>
                              <div className="generic_price_btn clearfix">
                                <button type='button' className='button' style={{backgroundColor:"black"}} >Read More</button>
                              </div>
                          </div> 
                      </div>
                    </div>	
                </div>          
             </div>
            ))
        }

    </div>
</div>
  </section>
  )
}

export default ManageServiceConfiguration