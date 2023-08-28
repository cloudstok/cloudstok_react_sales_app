import React from 'react'
import linux from '../../assets/images/linux.png'
import window from '../../assets/images/window.png'
import './awshosting.css'

const AwsHostingCard = () => {
    return (
        <div className='awsHosting'>
            <div className='aws'> <h1>AWS HOSTING</h1></div>

                <div className="platform-tab">
                    <div className='platform-tab-content'>
                        <img src={linux} alt='' width={70} height={70} />
                        <div className="platform-name">
                            <p>(O.S)</p>
                            <p>Linux</p>
                        </div>
                    </div>

                    <div className='platform-tab-content'>
                        <img src={window} alt='' width={70} height={70} />
                        <div className="platform-name">
                            <p>(O.S)</p>
                            <p>Windows</p>
                        </div>
                    </div>
                </div>

                <div className="tab-head">
                    <div className='link-tab'>  <p>Monthly</p> </div>
                    <div className='link-tab'> <p>Quarterly</p> </div>
                    <div className='link-tab'> <p>Yearly</p> </div>
                </div>

            <div className="cloud-support-container">
                <h1>Cloudstok  Next-Gen Manage Support</h1>
                <p>
                    Please select the package which suites you the most.we provide best in the industry cloud manage services
                    to our customers irrespective of the packages that will choose.
                </p>
            </div>




        </div>
    )
}

export default AwsHostingCard
