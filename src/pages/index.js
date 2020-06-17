import React from "react"

import Layout from "../components/Template/Layout"
import Home from "../components/Home/Home"
import About from "../components/About/About"
import Work from "../components/Work/Work"
import SEO from "../components/seo"

import "../styles/variables.scss"

const Index = () => (
  <Layout>
    <SEO title="Bianca Gonzalez"/>
    <Home/>
    <About/>
    <Work/>
  </Layout>
)

export default Index
