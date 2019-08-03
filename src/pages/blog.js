import React from "react"

import Layout from "../components/Template/Layout"
import SEO from "../components/seo"

const Blog = () => (
  <Layout>
    <SEO title="Blog" />
    <section className="section is-large">
      <div className="columns has-text-centered is-centered">
        <div className="column is-8">
          <h1 className="title mb-4">Coming Soon!</h1>
        </div>
      </div>
    </section>
  </Layout>
)

export default Blog