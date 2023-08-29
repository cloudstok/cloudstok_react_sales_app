import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Layout/home/Home'
import StepperConfiguration from './pages/stepper/StepperConfiguration'
import OrderReview from './pages/stepper/OrderReview'


const App = () => {
  return (

 <BrowserRouter>
  <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/platformConfiguration" element={<StepperConfiguration/>}/>
    <Route exact path="/orderReview" element={<OrderReview/>}/>
  </Routes>
 </BrowserRouter>

 
  )
}

export default App
