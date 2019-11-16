import React from "react"
import SkillCards from "./SkillCards"

const About = () => (
  <section id="about" className="section is-medium">
    <div className="columns has-text-centered is-centered mt-2 mb-4">
      <div className="column is-10">
        <h1 className="title mb-4 has-text-centered is-size-4-mobile">Hey there, I'm Bianca!</h1>
        <p className="subtitle has-text-left ml-1">
          I'm a <span className="has-text-primary has-text-weight-bold">self-taught Web Developer and User Interface Designer</span> from the Philippines who loves <span className="has-text-primary has-text-weight-bold">solving problems</span>, <span className="has-text-primary has-text-weight-bold">learning by doing </span>
          and <span className="has-text-primary has-text-weight-bold">bringing ideas to life through technology! </span>
          I also happen to have <span className="has-text-primary has-text-weight-bold">over a year of professional experience</span> in the tech world working for startups such as <a className="has-text-primary has-text-weight-bold" href="https://senti.ai/">Senti</a>, <a className="has-text-primary has-text-weight-bold" href="https://www.exora.ph/">Exora</a>, and <a className="has-text-primary has-text-weight-bold" href="https://medgrocer.com">MedGrocer.</a>
        </p>
      </div>
    </div>
    <SkillCards/>
  </section>
)

export default About