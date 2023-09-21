import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Layout/home/Home'
import StepperConfiguration from './pages/stepper/StepperConfiguration'
import OrderReview from './pages/stepper/OrderReview'
import Login from './pages/auth/login/Login'
import PaymentScreen from './pages/stepper/PaymentScreen'
import Register from './pages/auth/register/Register'
import ForgotPassword from './pages/auth/forgotpassword/ForgotPassword'
import MyTicket from './pages/myTicket/MyTicket'
import ProtectedRoute from './services/ProtectedRoute'
import Profile from './pages/auth/Profile'
import ScrollToTop from './components/ScrollToTop'
import CloudManage from './pages/manageService/CloudManage'



const App = () => {
  return (

 <BrowserRouter>
      <ScrollToTop>
  <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/platformConfiguration" element={<StepperConfiguration/>}/>
    <Route exact path="/orderReview" element={<OrderReview/>}/>
    <Route exact path="/payment" element={<ProtectedRoute>{<PaymentScreen/>}</ProtectedRoute>}/>
    <Route exact path="/login" element={<Login/>}/>
    <Route exact path="/register" element={<Register/>}/>
    <Route exact path="/cloudManage" element={<CloudManage/>}/>
    <Route path="/profile" element={<ProtectedRoute>{<Profile />}</ProtectedRoute>} />
  
    <Route exact path="/forgot_password" element={<ForgotPassword/>}/>
  </Routes>
  </ScrollToTop>
 </BrowserRouter>

 
  )
}

export default App
