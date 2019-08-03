import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Home from "../components/Home/Home"
import SEO from "../components/seo"

import "../styles/variables.scss"

const Index = () => (
  <Layout>
    <SEO title="Home" />
    <Home/>
  </Layout>
)

export default Index
