import React from "react"
import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <div className="nav nav-underline pt-2 mb-2">
      <NavLink to="/" className="nav-link">Home</NavLink>
      <NavLink to="/about" className="nav-link ms-3">About</NavLink>
      <NavLink to="/contact" className="nav-link ms-3">Contact</NavLink>
    </div>
  )
}

export default Navbar