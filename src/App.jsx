import React, { useState } from 'react'
import Register from './Register'
import Login from './Login'
import Home from './Home'
import Navbar from './Navbar'
import Logout from './Logout'
import Cart from './Cart'
import Details from './Details'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

const App = () => {
  const [cart,setCart]=useState([]);
  const [item,setItems]=useState({});
  return (
    <div>
      <BrowserRouter>
      <Navbar cart={cart}/>
      <Routes>
        <Route path="/" element={<Register/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/home" element={<Home cart={cart} setCart={setCart} setItems={setItems}/>}/>
        <Route path="/logout" element={<Logout/>}/>
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart}/>}/>
        <Route path="/details" element={<Details item={item} setItems={setItems}/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App