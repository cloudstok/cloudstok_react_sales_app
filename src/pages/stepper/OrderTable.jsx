import React from 'react'

const OrderTable = ({newData}) => {
  return (
    <div className="order-table">
    <p>Cloud Server Configuration</p>
    <table >
       <thead>
         <tr>
           <th>Product Details</th>
           <th>Price</th>
           <th>Plan</th>
         </tr>
       </thead>
       <tbody>
         <tr>
           <td>Package1</td>
           <td> ${newData?.data?.billing_Cycle} </td>
           <td>Yearly</td>
         </tr>
       </tbody>
     </table>
    <div className="manage-table">
     <p>Cloud Manage Support</p>
    <table >
      <thead>
        <tr>
          <th>Product Details</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td> {newData?.data?.manageServiceName} </td>
          <td> ${newData?.data?.manageServiceAmount}  </td>
        </tr>
      </tbody>
    </table>
    </div>
    <div className="total-price-container">
     <h2>Total Price</h2>
     <p> ${newData?.data?.amount} </p>
    </div>
    </div>
  )
}

export default OrderTable