import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (

        <div className='sidebar'>
            <Link to='/selectsteel' style={{ textDecoration: "none" }}>
                <div className='sidebar-item'>
                    <img src='' alt='' />
                    <p>Find your Sheet Metal surface treatment</p>
                </div>
            </Link>
            <Link to='/weightcalculations' style={{ textDecoration: "none" }}>
                <div className='sidebar-item'>
                    <img src='' alt='' />
                    <p>Find weight of your Sheet metal </p>
                </div>
            </Link>
            <Link to='/desgincalculations' style={{ textDecoration: "none" }}>
                <div className='sidebar-item'>
                    <img src='' alt='' />
                    <p>Advanced steel design calculations</p>
                </div>
            </Link>
            <Link to='/sheetmetaldetails' style={{ textDecoration: "none" }}>
                <div className='sidebar-item'>
                    <img src='' alt='' />
                    <p>All things about your sheet metal</p>
                </div>
            </Link>
        </div>
    )
}

export default Sidebar