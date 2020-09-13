import React from "react"
import ProjectTiles from "./ProjectTiles"

const Work = () => (
  <section id="work" className="section is-medium">
    <div className="columns is-centered mt-2 mb-4">
      <div className="column is-10">
        <h1 className="title is-size-4-mobile mb-5 has-text-centered">Work</h1>
        <ProjectTiles />
      </div>
    </div>
  </section>
)

export default Work
