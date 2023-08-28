import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Layout/home/Home'

const App = () => {
  return (

 <BrowserRouter>
  <Routes>
    <Route exact path="/" element={<Home/>}/>
  </Routes>
 </BrowserRouter>

 
  )
}

export default App
