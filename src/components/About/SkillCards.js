import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import classnames from "classnames"

const SkillCard = ({ skillset }) => {
  return (
    <div
      className={classnames(
        "card has-text-white has-text-left has-background-primary"
      )}>
      <div className="card-content has-text-white is-size-5">
        <p className="has-text-weight-bold">{skillset.category}</p>
        <p>{skillset.tech}</p>
      </div>
    </div>
  )
}

const SkillCards = () => {
  const skills = useStaticQuery(
    graphql`
      query AllSkillsQuery {
        skill: allDatoCmsSkill {
          nodes {
            category
            tech
          }
        }
      }
    `
  )

  return (
    <div className="columns is-multiline">
      {skills.skill.nodes.map((skill, index) => (
        <div className="column is-half" key={index}>
          <SkillCard skillset={skill} />
        </div>
      ))}
    </div>
  )
}

export default SkillCards
