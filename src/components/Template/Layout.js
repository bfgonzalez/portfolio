import React from "react"
import PropTypes from "prop-types"

import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"

const Layout = ({ children, hasFooter }) => {
  return (
    <>
      <Navbar />
      <div className="has-navbar-fixed-top has-background-black">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
