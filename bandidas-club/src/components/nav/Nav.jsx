import React from 'react'
import './nav.css'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <div className='nav'>
        <ul>
            <li><a href="#home" onClick={()=> setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}>Home</a></li>
            <li><a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>About</a></li>
            <li><a href="#work" onClick={()=> setActiveNav('#work')} className={activeNav === '#work' ? 'active' : ''}>Work</a></li>
            <li><a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}>Contact</a></li>
        </ul>
        <h1 className='logo'>Bandidas Club</h1>
        <h2 className='year'>2022</h2>
    </div>
  )
}

export default Nav