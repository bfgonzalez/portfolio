import React from "react"
import { Link } from "gatsby"

const Navbar = () => (
  <nav className="navbar is-fixed-top is-family-secondary is-transparent is-spaced" role="navigation">
    <div className="navbar-brand">
      <Link className="navbar-item has-text-weight-bold is-size-4" to="/">BIANCA GONZALEZ</Link>
    </div>
    <div className="navbar-menu">
      <div className="navbar-end is-size-5">
        <Link className="navbar-item" to="#work">WORK</Link>
        <Link className="navbar-item" to="#about">ABOUT</Link>
        <Link className="navbar-item" to="/blog">BLOG</Link>
        <Link className="navbar-item" to="#footer">CONTACT</Link>
      </div>
    </div>
  </nav>
)

export default Navbar