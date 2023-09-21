import React from 'react'
import '../stepper/payment.css'
import { useLocation, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import { GiCheckMark } from 'react-icons/gi'
import Swal from 'sweetalert2'
const PaymentScreen = () => {
  
  const navigate = useNavigate()
  const {state} = useLocation()
  const paymentNewData = state?.paymentData??{}
  console.log(paymentNewData)
  const formik = useFormik({
    initialValues: {
      name:"",
      expmonth:"",
      expyear:"",
      c_number:"",
      cvc:"",
    },
    // validationSchema: validationLogin,
    onSubmit: async (values) => {
      //  console.log(values)
      values.user = paymentNewData
      if(values){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: `We received your purchase request;we'll be in touch shortly!`,
          showConfirmButton: false,
          timer: 2000
        }).then(async (resposneData) => {
            navigate('/profile',{
              state:{ 
                finalValue :values
              }
             })
        })
      }
    },
 });
  return (
  //  <Layout>
     <section>
      <div className='paymentscreen-container'>
        <div className="checkout-container">
        <div className="checkout-h2">
        <h2 className="">Checkout</h2>
        <p>Price</p>
        </div>
          <div className="product-container">
            <div className="product-flex">
              <div className="product-box">
                <h3 className="product-h3">Cloud Server Configuration</h3>
              </div>
              <h2 className="product-nm">Rs.{paymentNewData?.configuration?.price}</h2>
            </div>
            <div className="ram-container-1">
            
                  <div className="ram-para-content-1">
                    <p>< GiCheckMark style={{ color: "#006cff" }}/>  {paymentNewData?.configuration?.vCPU} CPU Core </p>
                    <p> < GiCheckMark style={{ color: "#006cff" }}/> {paymentNewData?.configuration?.ram} RAM</p>
                    <p> < GiCheckMark style={{ color: "#006cff" }}/> {paymentNewData?.configuration?.storage} SSD RAID 10</p>
                    <p> < GiCheckMark style={{ color: "#006cff" }}/> {paymentNewData?.configuration?.bandwidth} bandwidth</p>
                  </div>
                  {/* <p>Free</p> */}
                
              </div>
          </div>

          <div className="product-container">
            <div className="product-flex">
              <div className="product-box">
                <h3 className="product-h3">Cloud Manage Support</h3>
                <p className="product-para">{paymentNewData?.manageService?.heading}</p>
              </div>
              <h2 className="product-nm">Rs.{paymentNewData?.manageService?.amount}</h2>
            </div>
          </div>

          <div className="product-container">
            <div className="product-flex product-line">
              <div className="product-box">
                <h3 className="product-h3">Total</h3>
              </div>
              <h2 className="product-nm">Rs.{paymentNewData?.amount}</h2>
            </div>
          </div>
        </div>

       
        <div className="credit-container">
        <h2 className="checkout-h2">Credit Card Details</h2>

        <div className="card-container">
          <form onSubmit={formik.handleSubmit}>
            <div className="card-flex-box">
              <div className="form-box">
                <label htmlFor="text">CARD HOLDER</label> <br />
                <input type="text" id='name' name='name' 
                   onChange={formik.handleChange}
                    value={formik.values.name}
                    onBlur={formik.handleBlur} placeholder='card holder'/>
              </div>
              <div className="form-box form-box2">
                <label htmlFor="text">EXPIRATION DATE</label> <br />
                <input type="text"  onChange={formik.handleChange}
                    value={formik.values.expmonth}
                    onBlur={formik.handleBlur} id='name' name='expmonth' placeholder='MM'/> <span className='form-span'> / </span>
                <input type="text"
                 onChange={formik.handleChange}
                 value={formik.values.expyear}
                 onBlur={formik.handleBlur}
                 id='name' name='expyear' placeholder='YY' />
              </div>
            </div>
            <div className="card-flex-box">
              <div className="form-box">
                <label htmlFor="text">CARD NUMBER</label> <br />
                <input type="text"
                  onChange={formik.handleChange}
                  value={formik.values.c_number}
                  onBlur={formik.handleBlur}
                 id='name' name='c_number' placeholder='card number'/>
              </div>
              <div className="form-box form-width-box2">
                <label htmlFor="text">CVC</label> <br />
                <input type="text" 
                   onChange={formik.handleChange}
                   value={formik.values.cvc}
                   onBlur={formik.handleBlur}
                id='name' name='cvc' placeholder='CVC'/>
              </div>
            </div>
            <div className="proceed-btn">
            <button  type='submit'>Proceed</button>
          </div>
          </form>
          </div>
      
        </div>
      </div>
     </section>
  //  </Layout>
  )
}

export default PaymentScreen