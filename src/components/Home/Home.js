import React from "react"
import { Helmet } from "react-helmet"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faDev } from '@fortawesome/free-brands-svg-icons'

const Home = () => (
  <div className="columns is-centered is-vcentered full-height">
    <Helmet>
      <meta name="description" content="Hi there, I'm Bianca! I'm a self-taught Web Developer and User Interface Designer."/>
      <meta property="og:url" content="https://bfgonzalez.netlify.app"/>
      <meta property="og:title" content="Bianca Gonzalez"/>
      <meta property="og:type" content="website"/>
      <meta property="og:image" content="../../images/thumbnail.png"/>
      <meta property="og:description" content="Hi there, I'm Bianca! I'm a self-taught Web Developer and User Interface Designer."/>
    </Helmet>
    <div className="column is-6 is-10-mobile has-text-left mt-6">
      <h1 className="title mb-3 is-size-4-mobile">Web Developer and User Interface Designer</h1>
      <p className="subtitle mb-1">
        I see the entire process through from ideation to creation.
      </p>
      <div className="is-size-3 mt-0">
        <a href="https://github.com/bfgonzalez" target="_blank" rel="noopener noreferrer" className="mr-2">
          <FontAwesomeIcon icon={faGithub} width="32"/>
        </a>
        <a href="https://dev.to/bfgonzalez" target="_blank" rel="noopener noreferrer" className="mr-2">
          <FontAwesomeIcon icon={faDev} width="32"/>
        </a>
        <a href="https://www.linkedin.com/in/bfgonzalez/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} width="32"/>
        </a>
      </div>
    </div>
  </div>
)

export default Home