import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Layout/home/Home'
import StepperConfiguration from './pages/stepper/StepperConfiguration'
import OrderReview from './pages/stepper/OrderReview'
import Payment from './pages/stepper/PaymentScreen'
import PaymentScreen from './pages/stepper/PaymentScreen'


const App = () => {
  return (

 <BrowserRouter>
  <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/platformConfiguration" element={<StepperConfiguration/>}/>
    <Route exact path="/orderReview" element={<OrderReview/>}/>
    <Route exact path="/payment" element={<PaymentScreen/>}/>
  </Routes>
 </BrowserRouter>

 
  )
}

export default App
