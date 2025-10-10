import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar({ email, onLogout }) {
  const [open, setOpen] = useState(false)
  const closeMenu = () => setOpen(false)
  return (
    <header>
      <div id="navbar" className="obj-width">
        <Link className="logo-text" to="/">SkillSync</Link>
        <ul id="menu" className={open ? 'active' : ''}>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/jobs" onClick={closeMenu}>Browse Jobs</Link></li>
          <li><Link to="/about" onClick={closeMenu}>About</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
          {email ? (
            <>
              <li><span className="nav-username">Hi, {email.split('@')[0]}</span></li>
              <li><a href="#" id="logout-btn" onClick={(e)=>{ e.preventDefault(); onLogout(); closeMenu(); }}>Logout</a></li>
            </>
          ) : (
            <>
              <li><Link to="/login" onClick={closeMenu}>Login</Link></li>
              <li><Link to="/signup" id="w-btn" onClick={closeMenu}>Register</Link></li>
            </>
          )}
        </ul>
        <i id="bar" className={`bx ${open ? 'bx-x' : 'bx-menu'}`} onClick={()=>setOpen(!open)}></i>
      </div>
    </header>
  )
}


