import React from 'react'

const OrderTable = ({ newData }) => {
  return (
    <div className="order-table">
      <p>Cloud Server Configuration</p>
      <table >
        <thead>
          <tr>
            <th>Product Details</th>
            <th>Price</th>
            <th>Operating System</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{newData?.configuartion?.name}</td>
            <td> Rs.{newData?.configuartion?.price} </td>
            <td>{newData?.configuartion?.os}</td>
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
              <td> {newData?.manageService?.heading} </td>
              <td> Rs.{newData?.manageService?.amount}  </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="total-price-container">
        <h2>Total Price</h2>
        <p> Rs.{newData?.amount} </p>
      </div>
    </div>
  )
}

export default OrderTable