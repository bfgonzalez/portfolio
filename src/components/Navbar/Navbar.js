import React, { useState } from "react"
import { Link } from "gatsby"
import classnames from "classnames"

const Navbar = () => {
  const [isActive, setActive] = useState(false)

  return (
    <nav
      className="navbar is-fixed-top is-family-secondary is-transparent is-spaced"
      role="navigation">
      <div className="navbar-brand">
        <Link className="navbar-item has-text-weight-bold is-size-4 has-text-primary" to="/">
          BIANCA GONZALEZ
        </Link>
        <div className="navbar-burger" onClick={() => setActive(!isActive)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div
        className={classnames("navbar-menu", isActive === true && "is-active")}
        data-target="navbar">
        <div id="navbar" className="navbar-end is-size-5 has-text-centered">
          <Link
            className="navbar-item"
            onClick={() => setActive(!isActive)}
            to="#work">
            WORK
          </Link>
          <Link
            className="navbar-item"
            onClick={() => setActive(!isActive)}
            to="#about">
            ABOUT
          </Link>
          <Link
            className="navbar-item"
            onClick={() => setActive(!isActive)}
            to="/blog">
            BLOG
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
