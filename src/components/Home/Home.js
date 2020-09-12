import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faLinkedin,
  faDev,
  faReact,
} from "@fortawesome/free-brands-svg-icons"

const Home = () => (
  <div className="columns is-centered is-vcentered full-height">
    <div className="column is-5-desktop is-8-tablet is-10-mobile has-text-left mt-6">
      <h1 className="has-text-primary is-size-2 has-text-weight-bold mb-1">
        BIANCA GONZALEZ
      </h1>
      <p className="is-size-4 is-size-4-mobile mb-1">
        <span className="has-text-weight-bold has-text-primary">
          Web Developer{" "}
        </span>
        who specializes in{" "}
        <span className="has-text-weight-bold has-text-primary">
          React <FontAwesomeIcon icon={faReact} width="32" />
        </span>
        <br /> I solve problems & bring ideas to life through tech!
      </p>
      <div className="is-size-3 mt-2">
        <a
          href="https://github.com/bfgonzalez"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-2">
          <FontAwesomeIcon icon={faGithub} width="32" />
        </a>
        <a
          href="https://dev.to/bfgonzalez"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-2">
          <FontAwesomeIcon icon={faDev} width="32" />
        </a>
        <a
          href="https://www.linkedin.com/in/bfgonzalez/"
          target="_blank"
          rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} width="32" />
        </a>
      </div>
    </div>
  </div>
)

export default Home
