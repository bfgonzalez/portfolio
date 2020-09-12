/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"

const Layout = ({ children, hasFooter }) => {
  return (
    <>
      <Navbar />
      <div className="has-navbar-fixed-top">
        <main>{children}</main>
      </div>
      {hasFooter === true && <Footer />}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
