import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='nav-container'>
            <div className='container'>
                <div className='heading'>
                    <h2>Contact Manager</h2>
                </div>
                <nav>
                    <i className="fa-solid fa-house-chimney"></i>
                    <NavLink to = "/">Home</NavLink>
                    <i className="fa-solid fa-calendar-plus"></i>
                    <NavLink to = "/add">Add</NavLink>
                    <i className="fa-solid fa-circle-question"></i>
                    <NavLink to = "/about">About</NavLink>
            
                </nav>
            </div>
         </div>


        
        
    )
}

export default Navbar
