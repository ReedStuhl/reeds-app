import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
    const [click, setClick] = useState(false)

    const handleClick = ()=> setClick(!click)
    const closeMobileMenu = () => setClick(false)


  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
            <Link to="/home" className="navbar-logo">
               r-stuhlreyer&nbsp; <i className='fab fa-galactic-republic' />
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times': 'fas fa-bars'}/>
            </div> 
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                        About
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/projects' className='nav-links' onClick={closeMobileMenu}>
                        Projects
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                        Contact
                    </Link>
                </li>
            </ul>
        
        </div>
      </nav>
    </>
  )
}

export default Navbar