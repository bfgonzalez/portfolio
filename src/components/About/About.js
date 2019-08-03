import React from "react"
import SkillCards from "./SkillCards"

const About = () => (
  <section id="about" className="section is-medium">
    <div className="columns has-text-centered is-centered mb-4">
      {/* <div className="column is-1"></div> */}
      <div className="column is-10">
        <h1 className="title mb-5 has-text-centered">Hey there, I'm Bianca!</h1>
        <p className="subtitle has-text-left ml-3">
          I'm a self-taught Front-End Web Developer and User Interface (UI) Designer from the Philippines who loves <span className="has-text-weight-bold has-text-primary">solving problems</span>, <span className="has-text-weight-bold has-text-primary">learning by doing </span>
          and <span className="has-text-weight-bold has-text-primary">bringing ideas to life through technology! </span>
          Currently, I'm an <span className="has-text-weight-bold has-text-info">Associate IT Manager</span> <br/>at<a className="has-text-info has-text-weight-bold" href="https://medgrocer.com"> MedGrocer.</a>
        </p>
      </div>
      {/* <div className="column is-1"></div> */}
    </div>
    <SkillCards/>
  </section>
)

export default About