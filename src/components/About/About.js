import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ReactMarkdown from "react-markdown/with-html"

import SkillCards from "./SkillCards"

const About = () => {
  const aboutText = useStaticQuery(
    graphql`
      query AboutQuery {
        about: datoCmsAbout {
          description
        }
      }
    `
  )

  return (
    <section id="about" className="section is-medium">
      <div className="columns has-text-centered is-centered mt-2 mb-4">
        <div className="column is-10">
          <h1 className="title is-size-4-mobile mb-4 has-text-centered">
            Hey there, I'm Bianca!
          </h1>
          <p className="is-size-4 has-text-left ml-1">
            <ReactMarkdown>{aboutText.about.description}</ReactMarkdown>
          </p>
        </div>
      </div>
      <h1 className="title is-size-4-mobile mb-4 has-text-centered">
        Cool tech I've worked with
      </h1>
      <div className="columns is-centered">
        <div className="column is-10">
          <SkillCards />
        </div>
      </div>
    </section>
  )
}

export default About
