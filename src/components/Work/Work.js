import React from "react"
import ProjectTiles from "./ProjectTiles";
import ampWebsiteThumbnail from "../../assets/amp-website.png"
import uxsocWebsiteThumbnail from "../../assets/uxsoc-website.png"

const Work = () => (
  <section id="work" className="section is-medium">
    <div className="columns is-centered mb-4">
      <div className="column is-10">
        <h1 className="title mb-5 has-text-centered">My Recent Work</h1>
        <ProjectTiles/>
      </div>
    </div>
  </section>
)

export default Work