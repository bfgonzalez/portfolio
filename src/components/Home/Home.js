import React from "react"
import { Link } from "gatsby"

const Home = () => (
  <section className="section is-large">
    <div className="columns has-text-centered is-centered">
      <div className="column is-8 has-text-left">
        <h1 className="title mb-4">Front-End Web Developer and User Interface Designer</h1>
        <h2 className="subtitle">
          I see the entire process through from ideation to creation.
        </h2>
        <div className="buttons">
          <button className="button is-primary has-text-weight-bold">
            <Link className="has-text-white" to="#work">View Work</Link>
          </button>
          <button className="button is-info has-text-weight-bold">
            <Link className="has-text-white" to="#footer">Get in Touch</Link>
          </button>
        </div>
      </div>
    </div>
  </section>
)

export default Home