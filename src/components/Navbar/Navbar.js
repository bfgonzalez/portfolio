import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import classnames from "classnames"

import logo from "../../images/logo.png"

const Navbar = () => {
  const [isActive, setActive] = useState(false)
  const [activeTab, setActiveTab] = useState("")

  const navbarLinks = ["#work", "#about", "/blog"]
  const navbarText = ["WORK", "ABOUT", "BLOG"]

  // handle activeTab state
  useEffect(() => {
    let url = window.location.href
    let slug = url.split("/").pop()

    switch (slug) {
      case "#work":
        setActiveTab("WORK")
        break
      case "#about":
        setActiveTab("ABOUT")
        break
      case "blog":
        setActiveTab("BLOG")
        break
      default:
        setActiveTab("")
    }
  }, [activeTab])

  return (
    <nav
      className="navbar is-fixed-top is-transparent is-spaced"
      role="navigation">
      <div className="navbar-brand">
        <Link
          className="navbar-item has-text-weight-bold is-size-4 has-text-primary"
          to="/">
          <img src={logo} />
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
          {navbarText.map((text, index) => (
            <Link
              key={index}
              className={classnames(
                "navbar-item has-text-primary",
                activeTab === text && "has-text-weight-bold"
              )}
              to={navbarLinks[index]}
              onClick={() => {
                setActiveTab(text)
                setActive(!isActive)
              }}>
              {text}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
