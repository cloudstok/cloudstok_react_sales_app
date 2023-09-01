import { useFormik } from 'formik';
import React from 'react'
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import '../stepper/stepper.css'
// import { useFormik } from 'formik';
import StepLabel from '@mui/material/StepLabel';
import { useLocation, useNavigate } from 'react-router-dom';
import OrderTable from './OrderTable';
const OrderReview = () => {
    const navigate = useNavigate()
    const [activeStep, setActiveStep] = React.useState(1);

    const {state} = useLocation()
    const newData = state?.orderNewData??{}
    // console.log(newData)
    const formik = useFormik({
      initialValues: {
        name:"",
        address:"",
        email:"",
        mobile:"",
        pinCode:""
      },
      onSubmit: values => {
        // values.amount = newData?.data?.amount
        // values.manageServiceName = newData?.data?.manageServiceName
        // values.manageServiceAmount= newData?.data?.manageServiceAmount
        // values.billing_Cycle = newData?.data?.billing_Cycle
        console.log(values)
       navigate('/login')
      },
    });
    
    const backHandle=()=>{
    navigate('/platformConfiguration')
    }
  return (
    <section>
    <div className="stepper-content">
             <Stepper activeStep={activeStep} >
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
     <form onSubmit={formik.handleSubmit}>
      <div className="border">
       <p>Order Review</p>
      <div className="order-review-container">
       <div className="order-review-body">
         <div className="order-details-head">
         <p>Address</p>
         </div>
           <div className="billing-form">
           <div className="order-input-container" >
               <label htmlFor="name"> Name </label> <br />
               <input type="text" name="name" value={formik.values.name} id="" onChange={formik.handleChange} />
             </div>
             <div className="order-input-container" >
               <label htmlFor="address"> Address </label> <br />
               <input type="text" name="address" value={formik.values.address} id="" onChange={formik.handleChange} />
             </div>
             <div className="order-input-container" >
               <label htmlFor="email"> Email </label> <br />
               <input type="email" name="email" value={formik.values.email} id="" onChange={formik.handleChange} />
             </div>
             <div className="order-input-container" >
               <label htmlFor="mobile"> Mobile </label> <br />
               <input type="text" name="mobile" value={formik.values.mobile} id="" onChange={formik.handleChange} />
             </div>
             <div className="order-input-container" >
               <label htmlFor="pinCode"> Pin Code </label> <br />
               <input type="text" name="pinCode" value={formik.values.pinCode} id="" onChange={formik.handleChange} />
             </div>
           </div>
       </div>
     <OrderTable newData={newData}/>
      </div>
     </div>
     <div className="next-step-container">
       <div className="next-step-body">
             <button type='button' id='back' className='button' onClick={backHandle}>Back</button>
             <button type='submit' className='button'>Checkout</button>
       </div>
     </div>
     </form>
      </div>
    </section>
  )
}

export default OrderReview