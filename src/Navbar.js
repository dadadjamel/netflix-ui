import React, { useState,useEffect } from 'react';
import './navbar.css'

const Navbar = () => { 
    const [show,handleshow] = useState(false)
    useEffect(()=>{
      window.addEventListener("scroll", ()=>{
        if (window.scrollY > 100) {
            handleshow(true)
        }else{
            handleshow(false)
        }
      })  
      return () => {
          window.removeEventListener('scroll')
      }
    },[])
    return ( 
        <div className={`nav ${show && "nav__black"}`}>
            <img className="nav__logo" src="https://thescrbblr.in/wp-content/uploads/2020/05/Netflix-Stops-Charging.jpeg" alt="Netflix Logo" />
            <img className="nav__logo" src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="Netflix Logo" />
            
        </div>
     );
}
 
export default Navbar;