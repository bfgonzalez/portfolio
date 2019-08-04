import React from "react"
import classnames from "classnames"

const SkillCard = ({ bgColor, header, subheader1, subheader2, skills, tools }) => (
  <div className={classnames(`card has-text-white has-text-left has-background-${bgColor}`)}>
    <div className="card-content has-text-white">
      <h3 className="is-size-3 is-size-4-mobile has-text-weight-bold mb-3">{header}</h3>
      <p className="is-size-5  is-size-6-mobile has-text-weight-bold">{subheader1}</p>
      <p>{skills}</p>
      <br/>
      <p className="is-size-5 is-size-6-mobile has-text-weight-bold">{subheader2}</p>
      <p>{tools}</p>
    </div>
  </div>
)

const SkillCards = () => (
  <div className="columns is-centered">
    <div className="column is-5">
      <SkillCard
        bgColor="primary"
        header="Front-End Web Developer"
        subheader1="Skills"
        skills="HTML, CSS, JavaScript, React, Responsive Web Design"
        subheader2="Tools"
        tools="NPM/Yarn, Sass, Bulma, Gatsby, Git, Github, Visual Studio Code, Terminal"/>
    </div>
    <div className="column is-5">
      <SkillCard
        bgColor="info"
        header="User Interface Designer"
        subheader1="Skills"
        skills="Research, Wireframes, Mockups, Prototyping"
        subheader2="Tools"
        tools="Pen & Paper, Figma, Adobe XD, InVision, Marvel"/>
    </div>
  </div>
)

export default SkillCards