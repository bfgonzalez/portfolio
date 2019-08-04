import React from "react"
import { Link } from "gatsby"

const Home = () => (
  <div className="columns is-centered is-vcentered full-height">
    <div className="has-text-left column is-8 is-10-mobile mt-6">
      <h1 className="title mb-4 is-size-4-mobile">Front-End Web Developer and User Interface Designer</h1>
      <h2 className="subtitle">
        I see the entire process through from ideation to creation.
      </h2>
      <div className="buttons">
        <Link className="button is-primary has-text-white" to="#work">View Work</Link>
        <Link className="button is-info has-text-white" to="#footer">Contact</Link>
      </div>
    </div>
  </div>
)

export default Home