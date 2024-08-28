import React from 'react'
import { Routes, Route } from 'react-router'
import Home from './Home'
import Product from './product'
import Cart from './cart'
import Contact from './contact'


const Rout = ({product, setProduct , detail , setdetail, view , close , setclose , cart, setCart , Addtocart}) => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home detail= {detail} setdtail={setdetail} view={view} close={close} setclose={setclose} Addtocart={Addtocart} />}/>
        <Route path='/product' element={<Product   product={product} setProduct={setProduct} detail= {detail} setdtail={setdetail} view={view} close={close} setclose={setclose} Addtocart={Addtocart}/>} />
        <Route path='/cart' element={<Cart  cart={cart} setCart={setCart} />} />
        <Route path='/contact' element={<Contact />} />
    </Routes>
    </>
  )
}

export default Rout