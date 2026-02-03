import './Header.css'
import React from 'react'
import Navbar from '../Navbar/Navbar'

const Header = () => {
  return (
    
    <>
    <Navbar/>
    <div className="header">
        <div className="header-contents">
            <h2>Order Your Food and and Enjoy</h2>
            <p>Discover delicious meals from your favorite restaurants, all in one place. Browse menus, customize your order, and get fresh food delivered straight to your doorstep — fast, easy, and reliable.</p>
            <button>View Menu</button>
        </div>
    </div>
    </>

  )
}

export default Header