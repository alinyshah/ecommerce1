import React from 'react'

import {BrowserRouter} from 'react-router-dom'
import Nav from './components/nav';
import Rout from './components/Rout';
import Homeproduct from './components/productdetail';
import Footer from './components/footer';
import { useState } from 'react'






const App = () => {


  // Add to cart

  const[cart ,setCart] = useState([])
  

  const [close ,setclose] = useState(false)
 
 const [detail, setDetail] = useState([])
 
  //filter sectiopn
  const [product ,setProduct ] =  useState(Homeproduct)
  const searchbtn =(product) => {
    const change = Homeproduct.filter((x) =>{
      return x.Cat === product

    }
    ) 
    setProduct(change)
  }
  // product detail
  const view = (product) =>
  {
    setDetail([{...product}])
    setclose(true)
  }

  // add to cart
 
  const Addtocart = (product) =>
  {
    const exist = cart.find((x) =>
      {
        return x.id === product.id
      
        
      })
if(exist) {
  alert("This Product is already added to cart")
}
else {
  setCart ([...cart, {...product , qty:1}])
  alert("Product is added to cart")
}
  }
  return (
    <>
    <BrowserRouter>
    <Nav searchbtn={searchbtn}/>
    <Rout product={product} setProduct={setProduct} detail={detail}  view={view} close={close} setclose={setclose} cart={cart} setCart={setCart} Addtocart={Addtocart}/>
    <Footer />
  </BrowserRouter>
    
    </>
  )
}

export default App;
