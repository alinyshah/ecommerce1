import React, { useState } from 'react'
import { FaTruckMoving } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { IoBagCheckOutline } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { CiLogin } from "react-icons/ci";
import { IoLogInOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";


import './nav.css'

const Nav = ({searchbtn}) => {
  const[search ,setSearch] = useState()
  const { loginWithRedirect ,logout, user, isAuthenticated } = useAuth0();
 
  return (
    <>
    <div className='freee'>
    <div className='icons'>
            <FaTruckMoving />

            </div>
             <p>FREE Shipping when Shoping upto $1000</p>

    </div>
    <div className='main_header'>
        <div className='container'>
            <div className='logo'>
            <img src= "images/logo12.png" alt='logo' ></img>

            </div>
            <div className='search_box'>
                <input type='text' value={search} placeholder='Enter the product Name' autoComplete='off' onChange={(e) => setSearch(e.target.value)}></input>
                <button onClick={() => searchbtn (search)}>Search</button>
            </div>
            <div className='icon'>
              {
                isAuthenticated &&
                <div className='account'>
                <div className='user_icon'>
                <AiOutlineUser />
                </div>
              <p>Hello, {user.name}</p>

              </div>
              }
              <div className='second_icon'>
                <Link to='/' className='link'><FaRegHeart /></Link>
                <Link to='/cart' className='link'><IoBagCheckOutline /></Link>
                
              
              <p></p>

              </div>
            
            </div>

        </div>

    </div>
    <div className='header'>
      <div className='container'>
        <div className='nav'>
        <ul>
          <li>
            <Link to="/" className='link'>Home</Link>
          </li>
          <li>
            <Link to="/Product" className='link'>Product</Link>
          </li>
          <li>
            <Link to="/About" className='link'>About</Link>
          </li>
          <li>
            <Link to="/contact" className='link'>contact</Link>
          </li>
        </ul>
        </div>
       
        <div className='auth'>

          {
            isAuthenticated ?
            <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}><IoLogInOutline /></button>

            :
            <button onClick={() => loginWithRedirect()}><CiLogin /></button>
       

          }
        
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Nav