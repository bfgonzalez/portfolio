import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Tags from "../Tags/Tags"

const ProjectTile = ({ project }) => {
  const techStack = JSON.parse(project.techStack)

  return (
    <div className="columns is-centered is-vcentered has-text-white">
      <div className="column is-10 mb-2">
        <div className="image mb-2" style={{ border: "2px solid #4ECDC4" }}>
          <img src={project.thumbnail.url} alt={project.thumbnail.title} />
        </div>
        <h2 className="is-size-4 is-size-5-mobile has-text-weight-bold">
          {project.title}
        </h2>
        <p className="py-2 is-size-5">{project.description}</p>
        <Tags labels={techStack} />
        <div className="field is-grouped mt-3">
          <div className="control">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer">
              <button
                className="button is-black has-text-weight-bold"
                style={{ border: "2px solid #4ECDC4" }}>
                Code
              </button>
            </a>
          </div>

          <div className="control">
            <a
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer">
              <button className="button is-primary has-text-weight-bold has-text-black">
                Demo
              </button>
            </a>
          </div>
        </div>
      </div>
      <hr />
    </div>
  )
}

const ProjectTiles = () => {
  const projects = useStaticQuery(
    graphql`
      query AllProjectsQuery {
        project: allDatoCmsProject(sort: { fields: position }) {
          nodes {
            thumbnail {
              url
              title
            }
            title
            description
            techStack
            githubUrl
            projectUrl
          }
        }
      }
    `
  )

  return (
    <div>
      {projects.project.nodes.map((project) => (
        <ProjectTile project={project} />
      ))}
    </div>
  )
}

export default ProjectTiles
