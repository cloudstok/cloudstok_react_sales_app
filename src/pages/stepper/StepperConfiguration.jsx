import React, { useEffect, useState } from 'react'
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { useLocation, useNavigate } from 'react-router-dom';
import Layout from '../../Layout/Layout';
import { getCaller, postCaller } from '../../services/api';
import '../stepper/stepper.css'
const StepperConfiguration = () => {
  const navigate = useNavigate();
  const { state } = useLocation()
  const platformRouteData = state?.planData ?? {}
  // const manageRouteData = state?.manageServiceData??[]
  console.log(platformRouteData)
  const [cycleIndex, setCycleIndex] = useState(0)
  const [totalAmount, setTotalAmount] = useState(0)
  const [selectElement, setSelectElement] = useState(0);
  const [manageAmount, setManageAmount] = useState(0)
  const [manageId, setManageId] = useState("")
  const [manageName, setManageName] = useState("")
  const [orderData, setOrderData] = useState({})
  const [manageServiceData, setManageServiceData] = useState([])
  const onSelect = (index, item) => {
    setSelectElement(index)
    setManageAmount(item.amount)
    setManageId(item._id)
    setManageName(item.heading)
  }

  const price = cycleIndex === 0 ? platformRouteData?.cost_Monthly?.slice(0, platformRouteData?.cost_Monthly?.length) : '' || cycleIndex === 1 ? platformRouteData?.cost_Quarterly?.slice(0, platformRouteData?.cost_Quarterly?.length) : "" || cycleIndex === 2 ? platformRouteData?.cost_yearly?.slice(0, platformRouteData?.cost_yearly?.length) : ''
  console.log(price)
  const newPrice = + price + + manageAmount

  useEffect(() => {
    getManageServiceData()
  }, [])
  const getManageServiceData = async (i) => {
    const res = await getCaller('findallmanageservices')
    setManageServiceData(res?.data)
  }
  const onSubmit = async () => {
    platformRouteData.amount = newPrice
    platformRouteData.manage_Service_id = manageId;
    platformRouteData.configuration_id = platformRouteData._id
    platformRouteData.billing_Cycle = price
    platformRouteData.manageServiceName = manageName
    platformRouteData.manageServiceAmount = manageAmount
    delete platformRouteData.cost_Monthly;
    delete platformRouteData._id;
    delete platformRouteData.cost_yearly;
    delete platformRouteData.__v
    delete platformRouteData.cost_Quarterly;
    const response  = await postCaller('createOrder',platformRouteData)
     console.log(response)
    if (response.status === true) {
      const jsonStr = response?.id
      const res = await getCaller(`findbyIdOrder/${jsonStr}`)
      navigate('/orderReview',{
        state:{
          orderNewData:res
        }
      })
    }
  }
  return (
    <Layout>
      <section>
        <div className="stepper-content">
          <Stepper  >
            <Step>
              <StepLabel>Configuration</StepLabel>
            </Step>
            <Step>
              <StepLabel> Order Review </StepLabel>
            </Step>
            <Step>
              <StepLabel> Payment </StepLabel>
            </Step>
          </Stepper>
        </div>
        <div className="configuration-container">
          <h1 style={{ color: "black" }}>Hosting Customization</h1>
          <p>Customize your Hosting Plan to fit your needs.</p>
          <div className="border">
            <div className="configuration-content">
              <div className="configuration-body">
                <label htmlFor="">Hosting Plan</label> <br />
                <select name="" id="">
                  <option value="">Pulser</option>
                </select>
              </div>
              <div className="configuration-body">
                <label htmlFor="">Billing Cycle</label>
                <ul className='cycle-tab'>
                  <li className={`cycle-link ${cycleIndex === 0 ? 'cycle-active' : ''}`} onClick={() => setCycleIndex(0)}>Yearly</li>
                  <li className={`cycle-link ${cycleIndex === 1 ? 'cycle-active' : ''}`} onClick={() => setCycleIndex(1)}>Quaterly</li>
                  <li className={`cycle-link ${cycleIndex === 2 ? 'cycle-active' : ''}`} onClick={() => setCycleIndex(2)}>Monthly</li>
                </ul>
              </div>

            </div>
            <div className="server-container">
              <div className="hardware-content">
                <p className='hardware-body'>Cloud Server Configuration</p>
                <p className='price-1'> ${price} </p>
              </div>
              <div className="ram-container">
                <div className="ram-body">
                  <div className="ram-para-content">
                    <p>  {platformRouteData.vCPU} CPU Core </p>
                    <p>  {platformRouteData.ram} RAM</p>
                    <p>  {platformRouteData.storage} SSD RAID 10</p>
                    <p>  {platformRouteData.bandwidth} bandwidth</p>
                  </div>
                  {/* <p>Free</p> */}
                </div>
              </div>
            </div>
            <div className="server-container">
              <div className="hardware-content">
                <p className='hardware-body'>Manage Service</p>
                <p className='price-1'>${manageAmount} </p>
              </div>
              <div className="service-container">
                <p className='service-para'>Choose Your Manage Service Plan</p>
                <div className="service-plan-container">
                  {
                    manageServiceData.map((el, i) => (
                      <div className='service-plan-body' key={i}>
                        <button type='button' className='select-btn' onClick={() => onSelect(i, el)} > {selectElement === i ? 'Selected ✓' : 'Select'} </button>
                        <p> {el.heading} <br /> FREE
                        </p>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
          <div className="next-step-container">
            <div className="next-step-body">
              <p className='total-price'>Total Price: ${newPrice}</p>
              <div className="">
                <button type='button' className='button' onClick={onSubmit}>Next Step</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default StepperConfiguration