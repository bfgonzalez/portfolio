import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faDev } from '@fortawesome/free-brands-svg-icons'

const Home = () => (
  <div className="columns is-centered is-vcentered full-height">
    <div className="column is-7 is-10-mobile has-text-left mt-6">
      <h1 className="title mb-3 is-size-4-mobile">Front-End Web Developer and User Interface Designer</h1>
      <p className="subtitle mb-1">
        I see the entire process through from ideation to creation.
      </p>
      <div className="is-size-3 mt-0">
        <a href="https://github.com/bfgonzalez" target="_blank" rel="noopener noreferrer" className="mr-2">
          <FontAwesomeIcon icon={faGithub}/>
        </a>
        <a href="https://dev.to/bfgonzalez" target="_blank" rel="noopener noreferrer" className="mr-2">
          <FontAwesomeIcon icon={faDev}/>
        </a>
        <a href="https://www.linkedin.com/in/bfgonzalez/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin}/>
        </a>
      </div>
    </div>
  </div>
)

export default Home