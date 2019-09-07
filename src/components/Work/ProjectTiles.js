import React from "react"
import ampWebsiteThumbnail from "../../assets/amp-website.png"
import uxsocWebsiteThumbnail from "../../assets/uxsoc-website.png"


const projects = [
  {
    "url": "https://www.uxsociety.org/",
    "imageSource": uxsocWebsiteThumbnail,
    "altText": "User Experience Society (Official Website)"
  },
  {
    "url": "https://bfgonzalez.github.io/amp-website",
    "imageSource": ampWebsiteThumbnail,
    "altText": "Ateneo Musicians' Pool (Mock Redesign)"

  }
]

const ProjectTile = ({ content }) => {
  let {url, imageSource, altText} = content;

  return(
    <div>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <div className="image">
          <img src={imageSource} alt={altText}/>
        </div>
      </a>
    </div>
  )
}

const ProjectTiles = () => {
  return(
    <div className="columns">
      {projects.map((project, index) => (
        <div className="column is-6">
          <ProjectTile key={index} content={project}/>
        </div>
      ))}
    </div>
  )
}

export default ProjectTiles