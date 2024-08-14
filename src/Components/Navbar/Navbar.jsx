import React from 'react'
import './Navbar.css'
import steelselector_logo from "../Assets/Steelselector Logo.jpg"



const Navbar = () => {
    return (
        <div className='navbar'>
            <img src={steelselector_logo} className='nav-logo ' alt='' />
            <img src='' className='nav-profile ' alt='' />

        </div>
    )
}

export default Navbar