import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Template/Layout"
import Home from "../components/Home/Home"
import About from "../components/About/About"
import SEO from "../components/seo"

import "../styles/variables.scss"

const Index = () => (
  <Layout>
    <SEO title="Home" />
    <Home/>
    <About/>
  </Layout>
)

export default Index
