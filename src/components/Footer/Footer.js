import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin, faDev } from "@fortawesome/free-brands-svg-icons"

const Footer = () => (
  <footer id="footer" className="footer columns is-centered">
    <div className="column has-text-centered has-text-primary">
      <div className="is-size-3">
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
      <p className="is-size-6">
        <a
          // className="has-text-white mr-2"
          href="https://bfgonzalez.netlify.app/"
          target="_blank"
          rel="noopener noreferrer">
          Bianca Gonzalez © {new Date().getFullYear()}
        </a>
      </p>
    </div>
  </footer>
)

export default Footer
