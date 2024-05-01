import React from 'react'
import "./Navbar.css"
import back_icon from "../../assets/back.svg"

const Navbar = () => {
  return (
    <div className='navbar'>
      <h1 className="logo-text">HR</h1>
      <button className='back-btn'><img src={back_icon} alt="" /></button>
    </div>
  )
}

export default Navbar