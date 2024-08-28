import React  from 'react'
import Homeproduct from './productdetail'
import { BsEye } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { MdOutlineShoppingCart } from "react-icons/md";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useAuth0 } from "@auth0/auth0-react";
import './product.css';



const Product = ({product, setProduct , detail , view , close ,setclose , Addtocart}) => {

  const { loginWithRedirect , isAuthenticated } = useAuth0();

 
  const filterproduct = (product) =>
     {
      const update = Homeproduct.filter ((x) =>
      {
        return x.Cat === product;
      }
    )
    setProduct (update);
    }

    const ALLproduct = () => {
      setProduct (Homeproduct)
    }

  

  return (
    <>
    {
      close ?

      <div className='product_detail'>
      <div className='container'>
        <button onClick={() =>setclose(false)} className='closebtn'><AiOutlineCloseCircle /></button>

        {
         
            detail.map((curElm) =>{
              return(
                  <div className='productbox'>
                    <div className='img_box'>
                      <img src={curElm.Img} alt={curElm.Title}></img>
                    </div>

                  <div className='detail'> 
                    <h4>{curElm.Cat}</h4>
                    <h2>{curElm.Title}</h2>
                    <p>A Screen Everyone Will Love :Whether your Family is start</p>
                    <h3>{curElm.Price}</h3>
                    <button>Add to Cart</button>

                  </div>
                  </div>
                              
                   

              )
              
              
          })
        }
        <div className='productbox'></div>
      </div>
    </div> : null
    }
   
    
    <div className='product'>
    <h2> # Product</h2> 
    <p>Home . product</p>
      <div className='container'>
        <div className='filter'>
          <div className='categories'>
            <h3>Catogeries</h3>
            <ul>
              <li onClick={() => ALLproduct  ("tablet")}>ALL product</li>
              <li onClick={() => filterproduct ("Caego Shoes")}>Caego Shoes</li>
              <li onClick={() => filterproduct ("VestTop")}>VestTop</li>
              <li onClick={() => filterproduct ("MOuse")}>MOuse</li>
              <li onClick={() => filterproduct ("Foundation")}>FoundationF</li>
              <li onClick={() => filterproduct ("Blush")}>Blush</li>
              
            </ul>
          </div>
        </div>
        <div className='productbox'>
          <div className='content'>
          {
            product.map((curElm) =>{
                return(
                    <div className='box' key={curElm.id}>
                        <div className='img_box'>
                            <img src={curElm.Img} alt={curElm.Title} ></img>
                            <div className='icon'> 

                              {
                                isAuthenticated ? 
                                <li className='icon_box' onClick={() => Addtocart(curElm)}><MdOutlineShoppingCart />
                              </li>
                              :
                              <li className='icon_box' onClick={() => loginWithRedirect()}><MdOutlineShoppingCart />
                              </li> }
                              
                                <div className='icon_box' onClick={() =>view(curElm)}> <BsEye />
                                 </div>
                                 <div className='icon_box'><AiOutlineHeart/>
                                 </div>
                               
                               
                                
                                
                                </div>
                                </div>

                                <div className='detail'>
                                    <p>{curElm.Cat}</p>
                                    <h3>{curElm.Title}</h3>
                                    <h4>${curElm.Price}</h4>
                                </div>

                     </div>
                     

                )
                
                
            })
        
        }
          </div>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Product