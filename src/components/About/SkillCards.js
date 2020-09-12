import React from "react"
import classnames from "classnames"

import skills from "../../assets/skills.json"

const SkillCard = ({ header, content }) => {
  return (
    <div
      className={classnames(
        "card has-text-white has-text-left has-background-primary"
      )}>
      <div className="card-content has-text-white">
        <p className="is-size-4 has-text-weight-bold">{header}</p>
        <p className="is-size-4">{content}</p>
      </div>
    </div>
  )
}

const SkillCards = () => {
  const headers = [
    "Languages",
    "Frameworks",
    "Libraries",
    "Hosting",
    "Databases",
    "Dev Tools",
    "Design Tools",
    "Misc",
  ]

  const content = Object.values(skills)

  return (
    <div className="columns is-multiline">
      {headers.map((header, index) => (
        <div className="column is-half" key={index}>
          <SkillCard index={index} header={header} content={content[index]} />
        </div>
      ))}
    </div>
  )
}

export default SkillCards
