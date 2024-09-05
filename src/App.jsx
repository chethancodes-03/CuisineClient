// eslint-disable-next-line no-unused-vars
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Signup'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import Recipe from './Recipe'
import DietPlan from './DietPlan'
import OrderOnline from './OrderOnline';

function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path='/register' element={<Signup />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/recipe' element={<Recipe />}></Route>
          <Route path="/diet-plan" element={<DietPlan />}></Route>
          <Route path="/order-online" element={<OrderOnline />}></Route>

      </Routes>
    </BrowserRouter>


  )
}

export default App


