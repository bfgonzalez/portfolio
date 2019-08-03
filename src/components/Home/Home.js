import React from "react"
import { Link } from "gatsby"

const Home = () => (
  <section className="section is-large">
    <div className="columns has-text-centered ml-8">
      <div className="column is-1"></div>
      <div className="column is-10 has-text-left">
        <h1 className="title mb-4">Front-End Web Developer and User Interface (UI) Designer</h1>
        <h2 className="subtitle test-border">
          I see the entire process through from ideation to creation.
        </h2>
        <div className="buttons">
          <button className="button is-primary is-medium is-uppercase has-text-weight-bold">
            <Link className="has-text-white" to="#work">View Work</Link>
          </button>
          <button className="button is-info test-border is-medium is-uppercase has-text-weight-bold">
            <Link className="has-text-white" to="#footer">Get in Touch</Link>
          </button>
        </div>
      </div>
      <div className="column is-0"></div>
    </div>
  </section>
)

export default Home