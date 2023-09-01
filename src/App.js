import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Layout/home/Home'
import StepperConfiguration from './pages/stepper/StepperConfiguration'
import OrderReview from './pages/stepper/OrderReview'
import Login from './pages/auth/login/Login'
import PaymentScreen from './pages/stepper/PaymentScreen'
import Register from './pages/auth/register/Register'
import ForgotPassword from './pages/auth/forgotpassword/ForgotPassword'



const App = () => {
  return (

 <BrowserRouter>
  <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/platformConfiguration" element={<StepperConfiguration/>}/>
    <Route exact path="/orderReview" element={<OrderReview/>}/>
    <Route exact path="/payment" element={<PaymentScreen/>}/>
    <Route exact path="/login" element={<Login/>}/>
    <Route exact path="/register" element={<Register/>}/>
    <Route exact path="/forgot_password" element={<ForgotPassword/>}/>
  </Routes>
 </BrowserRouter>

 
  )
}

export default App
