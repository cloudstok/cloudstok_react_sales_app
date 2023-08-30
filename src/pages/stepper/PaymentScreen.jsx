import React from 'react'
import '../stepper/payment.css'

const PaymentScreen = () => {
  return (
  //  <Layout>
     <section>
      <div className='paymentscreen-container'>
        <div className="checkout-container">
          <h2 className="checkout-h2">Checkout</h2>

          <div className="product-container">
            <div className="product-flex">
              <div className="product-box">
                <h3 className="product-h3">Product 1</h3>
                <p className="product-para">Lorem ipsum dolor sit amet</p>
              </div>
              <h2 className="product-nm">$200</h2>
            </div>
          </div>

          <div className="product-container">
            <div className="product-flex">
              <div className="product-box">
                <h3 className="product-h3">Product 2</h3>
                <p className="product-para">Lorem ipsum dolor sit amet</p>
              </div>
              <h2 className="product-nm">$120</h2>
            </div>
          </div>

          <div className="product-container">
            <div className="product-flex product-line">
              <div className="product-box">
                <h3 className="product-h3">Total</h3>
              </div>
              <h2 className="product-nm">$320</h2>
            </div>
          </div>
        </div>


        <div className="credit-container">
        <h2 className="checkout-h2">Credit Card Details</h2>

        <div className="card-container">
          <form action="">
            <div className="card-flex-box">
              <div className="form-box">
                <label htmlFor="text">CARD HOLDER</label> <br />
                <input type="text" id='name' name='name' placeholder='card holder'/>
              </div>
              <div className="form-box form-box2">
                <label htmlFor="text">EXPIRATION DATE</label> <br />
                <input type="text" id='name' name='name' placeholder='MM'/> <span className='form-span'> / </span>
                <input type="text" id='name' name='name' placeholder='YY' />
              </div>
            </div>
          </form>
          </div>
          
        <div className="card-container">
          <form action="">
            <div className="card-flex-box">
              <div className="form-box form-width-box">
                <label htmlFor="text">CARD NUMBER</label> <br />
                <input type="text" id='name' name='name' placeholder='card number'/>
              </div>
              <div className="form-box form-width-box2">
                <label htmlFor="text">CVC</label> <br />
                <input type="text" id='name' name='name' placeholder='CVC'/>
              </div>
            </div>
          </form>

          <div className="proceed-btn">
            <button>proceed</button>
          </div>
          </div>
        </div>
      </div>
     </section>
  //  </Layout>
  )
}

export default PaymentScreen