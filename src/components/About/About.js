import React from "react"
import SkillCards from "./SkillCards"

const About = () => (
  <section id="about" className="section is-medium">
    <div className="columns has-text-centered is-centered mt-2 mb-4">
      <div className="column is-10">
        <h1 className="title mb-4 has-text-centered is-size-4-mobile">Hey there, I'm Bianca!</h1>
        <p className="subtitle has-text-left ml-1">
          I'm a self-taught Web Developer and User Interface Designer from the Philippines who loves <span className="has-text-primary">solving problems</span>, <span className="has-text-primary">learning by doing </span>
          and <span className="has-text-primary">bringing ideas to life through technology! </span>
          Currently, I'm an <span className="has-text-primary">Developer</span> at<a className="has-text-primary" href="https://medgrocer.com"> <u>MedGrocer</u>.</a>
        </p>
      </div>
    </div>
    <SkillCards/>
  </section>
)

export default About