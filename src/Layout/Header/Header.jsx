import React, { useState } from 'react'
import logo from '../../assets/images/headerlogo.png'
import { AiOutlineClose } from 'react-icons/ai'
import { FiMenu, FiSearch } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
    const [open, setOpen] = useState(false)
    const [showToggle, setShowToggle] = useState(false)
    return (
        <header >
            {/* <div className="bg-image"> <p> AWS Server Hosting</p> </div> */}
            <div className='header'>
                <div> <img src={logo} alt="" width={90} /> </div>
                {
                    showToggle ? <div className="menu-icon" onClick={() => setShowToggle(false)}><AiOutlineClose style={{ color: "black", fontSize: "1.7rem" }} /></div> : <div className="menu-icon" onClick={() => setShowToggle(true)}>
                        <FiMenu style={{ color: "black", fontSize: "1.5rem" }} />
                    </div>
                }

                <ul className={`navlist-container  ${showToggle && 'active'}`}>
                    <li> <Link to="/"
                        className="navlink"  >
                        Home
                    </Link>  </li>
                    <li> <Link to="/service"
                        className="navlink"   >
                        Services
                    </Link>  </li>
                    <li> <Link to="/blog"
                        className="navlink">
                        Blog
                    </Link>  </li>
                    <li> <Link to="/contact"
                        className="navlink">
                        Contact us
                    </Link>  </li>
                    <div className="search-btn" onClick={() => setOpen(true)}>
                        <FiSearch className='search-icon' />
                    </div>
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
