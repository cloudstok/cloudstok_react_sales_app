import React, { useState } from 'react'
import logo from '../../assets/images/headerlogo.png'
import { AiOutlineClose } from 'react-icons/ai'
import { FiMenu, FiSearch } from 'react-icons/fi'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import './Header.css'

const Header = () => {
    const navigate= useNavigate()
    const [open, setOpen] = useState(false)
    const [showToggle, setShowToggle] = useState(false)
    const user  = localStorage.getItem('token')
    
    const handleLogout=async()=>{
        if (window.confirm('Are You Sure You Want To Logout?')) {
            localStorage.clear();
            navigate('/');
          };
    }
    return (
        <header >
            {/* <div className="bg-image"> <p> AWS Server Hosting</p> </div> */}
            <div className='header'>
                <Link to="/"> <img src={logo} alt="" width={90} /> </Link>
                {
                    showToggle ? <div className="menu-icon" onClick={() => setShowToggle(false)}><AiOutlineClose style={{ color: "black", fontSize: "1.7rem" }} /></div> : <div className="menu-icon" onClick={() => setShowToggle(true)}>
                        <FiMenu style={{ color: "black", fontSize: "1.5rem" }} />
                    </div>
                }

                <ul className={`navlist-container  ${showToggle && 'active'}`}>
                    <li> <NavLink to="/"
                        className="navlink"  >
                        Home
                    </NavLink>  </li>
                    <li> <NavLink to="/service"
                        className="navlink"   >
                        Services
                    </NavLink>  </li>
                    <li> <NavLink to="/blog"
                        className="navlink">
                        Blog
                    </NavLink>  </li>
                    <li> <NavLink to="/contact"
                        className="navlink">
                        Contact us
                    </NavLink>  </li>
                    <div className="search-btn" onClick={() => setOpen(true)}>
                        <FiSearch className='search-icon' />
                    </div>
                    {
                    user?<div className='box-1' onClick={handleLogout}><p>User</p></div>:null
                }
                </ul>
                
                {
                    open && <div className="search-box">
                        <div className="search-input-box">
                            <div className="close-icon" onClick={() => setOpen(false)}> <AiOutlineClose className='close-btn' /> </div>
                            <div className='search-input'>
                                <input type="search" name="" id="" placeholder='Search...' />
                            </div>
                        </div>
                    </div>
                }
               

            </div>
        </header>
    )
}

export default Header
