import React from "react"
import ampWebsiteThumbnail from "../../assets/amp-website.png"
import uxsocWebsiteThumbnail from "../../assets/uxsoc-website.png"

const ProjectTile = ({ imageSource, altText }) => {
  return(
    <div>
      <div className="image">
        <img src={imageSource} alt={altText}/>
      </div>
    </div>
  )
}

const ProjectTiles = () => (
  <div className="columns">
    <div className="column is-6">
      <a href="https://www.uxsociety.org/" target="_blank">
        <ProjectTile
          altText="User Experience Society (Official Website)"
          imageSource={uxsocWebsiteThumbnail}/>
      </a>
    </div>
    <div className="column is-6">
      <a href="https://bfgonzalez.github.io/amp-website" target="_blank">
        <ProjectTile
          altText="Ateneo Musicians' Pool (Mock Redesign)"
          imageSource={ampWebsiteThumbnail}/>
      </a>
    </div>
  </div>
)

export default ProjectTiles