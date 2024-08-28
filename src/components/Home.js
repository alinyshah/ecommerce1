import React from 'react'
import {Link} from 'react-router-dom'
import { BsArrowRight } from "react-icons/bs";
import { FiTruck } from "react-icons/fi";
import { BsCurrencyDollar } from "react-icons/bs";
import { CiPercent } from "react-icons/ci";
import { BiHeadphone } from "react-icons/bi";
import { BsEye } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { MdOutlineShoppingCart } from "react-icons/md";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Homeproduct from './homeproduct';
import './home.css'
import { useState } from 'react'




const Home = ({detail , view , close ,setclose, Addtocart}) => {
    const [homeproduct ] =  useState(Homeproduct)


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
   
    <div className='top_banner'>
        <div className='container'>
            <div className='detail'>
                <h2> The Best Note Book Collection 2023</h2>
                
                <Link to='/PRODUCT' className='link'>Shop Now <BsArrowRight /></Link>
                </div>

                <div className='img_box'>
                    <img src='images/slider1.png' alt='sliderimg'></img>

                </div>
        </div>
    </div>
    <div className='product_type'>
        <div className='container'>
            <div className='box'>
                <div className='img_box'>
                    <img src='images/mobile2.png' alt='mobile'></img>
                </div>
                <div className='detail'>
                    <p> 23 product</p>
                </div>
            </div>
            <div className='box'>
                <div className='img_box'>
                    <img src='images/headphone2.png' alt='mobile'></img>
                </div>
                <div className='detail'>
                    <p> 23 product</p>
                </div>
            </div>
            <div className='box'>
                <div className='img_box'>
                    <img src='images/makup3.png' alt='mobile'></img>
                </div>
                <div className='detail'>
                    <p> 23 makeup</p>
                </div>
            </div>
            <div className='box'>
                <div className='img_box'>
                    <img src='images/clothes1.png' alt='mobile'></img>
                </div>
                <div className='detail'>
                    <p> 23 clothes</p>
                </div>
            </div>

        </div>

    </div>
    <div className='about'>
        <div className='container'>
            <div className='box'>
                <div className='icon'>
                <FiTruck />
                 </div>
                 <div className='detail'>
                    <h3>Free Shipping</h3>
                    <p>Oder above $1000</p>
                 </div>
            </div>
            <div className='box'>
                <div className='icon'>
                <BsCurrencyDollar />
                 </div>
                 <div className='detail'>
                    <h3>Return & Refund</h3>
                    <p>Money Back Gaurenty</p> 
                 </div>
            </div>
            <div className='box'>
                <div className='icon'>
                <CiPercent />
                 </div>
                 <div className='detail'>
                    <h3>Member Discount</h3>
                    <p>On every Order</p>
                 </div>
            </div>
            <div className='box'>
                <div className='icon'>
                <BiHeadphone />
                 </div>
                 <div className='detail'>
                    <h3>Custom Support</h3>
                    <p>Every Time Call Support</p>
                 </div>
            </div>
        </div>
    </div>
    <div className='product'>
        <h2>Top Product </h2>
        <div className='conatainer'>
        {
            homeproduct.map((curElm) =>{
                return(
                    <div className='box' key={curElm.id}>
                        <div className='img_box'>
                            <img src={curElm.Img} alt={curElm.Title} ></img>
                            <div className='icon'> 
                                <li onClick={() => Addtocart(curElm)}><MdOutlineShoppingCart /></li>
                                   <li onClick={() =>view(curElm)}><BsEye /></li>
                                 <li><AiOutlineHeart/></li>
                                   
                                 
                               
                               
                                
                                
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

    {/* Banner section */}
    <div className='banner'>
       <div className='container'>
       <div className='detail'>
            <h4>LASTEST TECHNOLOGY ADDED</h4>
            <h3>Apple iPad 10.2 9th Gen - 2021</h3>
            <p><BsCurrencyDollar/>986</p>
            <Link to="/product" className='link' >Shop Now <BsArrowRight/></Link>
        </div>
        <img src='images/founation3.png ' alt='slidering'></img>

       </div>
    </div>
    </>
  )
}

export default Home