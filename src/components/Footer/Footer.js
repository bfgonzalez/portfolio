import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faDev } from '@fortawesome/free-brands-svg-icons'

const Footer = () => (
  <footer id="footer" className="footer has-background-primary">
    <div className="content has-text-centered has-text-white">
      <div className="is-size-3">
        <a href="https://github.com/bfgonzalez" className="has-text-white mr-2">
          <FontAwesomeIcon icon={faGithub}/>
        </a>
        <a href="https://dev.to/bfgonzalez" className="has-text-white mr-2">
          <FontAwesomeIcon icon={faDev}/>
        </a>
        <a href="https://www.linkedin.com/in/bfgonzalez/" className="has-text-white">
          <FontAwesomeIcon icon={faLinkedin}/>
        </a>
      </div>
      <p className="is-size-5 has-text-white">
        Bianca Gonzalez © {new Date().getFullYear()}
      </p>
    </div>
  </footer>
)

export default Footer