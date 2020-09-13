import React from "react"
import Tags from "../Tags/Tags"

import projects from "../../assets/projects.json"
import ampWebsiteThumbnail from "../../assets/amp-website.png"
import uxsocWebsiteThumbnail from "../../assets/uxsoc-website.png"

const ProjectTile = ({ content, thumbnail }) => {
  let {
    projectTitle,
    projectUrl,
    projectDescription,
    githubUrl,
    altText,
    techStack,
  } = content

  return (
    <div className="columns is-centered is-vcentered">
      <div className="column is-10 mb-2">
        <div className="image mb-2">
          <img src={thumbnail} alt={altText} />
        </div>
        <h2 className="is-size-4 is-size-5-mobile has-text-weight-bold">
          {projectTitle}
        </h2>
        <p className="py-2 is-size-5">{projectDescription}</p>
        <Tags labels={techStack} />
        <div className="field is-grouped mt-3">
          <div className="control">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <button className="button is-black has-text-weight-bold">
                Code
              </button>
            </a>
          </div>

          <div className="control">
            <a href={projectUrl} target="_blank" rel="noopener noreferrer">
              <button className="button is-primary has-text-weight-bold">
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
  const thumbnails = [uxsocWebsiteThumbnail, ampWebsiteThumbnail]
  return (
    <div>
      {projects.map((project, index) => (
        <div key={index} className="mb-5">
          <ProjectTile
            key={index}
            content={project}
            thumbnail={thumbnails[index]}
          />
        </div>
      ))}
    </div>
  )
}

export default ProjectTiles
