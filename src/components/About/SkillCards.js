import React from "react"
import classnames from "classnames"

import skills from "../../assets/skills.json"

const SkillCard = ({ content }) => {
  let { header, skills, tools } = content

  return (
    <div
      className={classnames(
        "card has-text-white has-text-left has-background-primary"
      )}>
      <div className="card-content has-text-white">
        <h3 className="is-size-3 is-size-4-mobile has-text-weight-bold mb-3">
          {header}
        </h3>
        <p className="is-size-5  is-size-6-mobile has-text-weight-bold">
          Skills
        </p>
        <p>{skills}</p>
        <br />
        <p className="is-size-5 is-size-6-mobile has-text-weight-bold">Tools</p>
        <p>{tools}</p>
      </div>
    </div>
  )
}

const SkillCards = () => {
  return (
    <div className="columns is-centered">
      {skills.map((cardContent, index) => (
        <div className="column is-5" key={index}>
          <SkillCard key={index} content={cardContent} />
        </div>
      ))}
    </div>
  )
}

export default SkillCards
