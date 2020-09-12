import React from "react"
import SkillCards from "./SkillCards"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faReact } from "@fortawesome/free-brands-svg-icons"

const About = () => (
  <section id="about" className="section is-medium">
    <div className="columns has-text-centered is-centered mt-2 mb-4">
      <div className="column is-10">
        <h1 className="title mb-4 has-text-centered is-size-4-mobile">
          Hey there, I'm Bianca!
        </h1>
        <p className="is-size-4 has-text-left ml-1">
          I'm a{" "}
          <span className="has-text-weight-bold has-text-primary">
            &lt;Web Developer /&gt;
          </span>{" "}
          from the Philippines 🇵🇭 who loves solving problems 🧠, learning by
          doing 🛠️ and bringing ideas💡 to life through technology 👩‍💻. I
          currently specialize in{" "}
          <span className="has-text-weight-bold has-text-primary">
            React <FontAwesomeIcon icon={faReact} width="32" />
          </span>
          , and have worked with startups such as{" "}
          <a className="has-text-weight-bold" href="https://senti.ai/">
            Senti
          </a>
          ,{" "}
          <a className="has-text-weight-bold" href="https://www.exora.ph/">
            Exora
          </a>
          , and{" "}
          <a className="has-text-weight-bold" href="https://medgrocer.com">
            MedGrocer.
          </a>
        </p>
      </div>
    </div>
    <h1 className="title mb-4 has-text-centered is-size-4-mobile">
      Cool tech I've worked with
    </h1>
    <SkillCards />
  </section>
)

export default About
