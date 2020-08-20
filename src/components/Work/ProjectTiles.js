import React from "react"

import Tags from "../Tags/Tags"

import ampWebsiteThumbnail from "../../assets/amp-website.png"
import uxsocWebsiteThumbnail from "../../assets/uxsoc-website.png"

const projects = [
	{
		projectTitle: "User Experience Society (Official Website)",
		url: "https://www.uxsociety.org/",
		projectDescription:
			"The official website of User Experience Society—a student organization that advocates and practices human-centered design in solving problems in the community.",
		imageSource: uxsocWebsiteThumbnail,
		altText: "User Experience Society (Official Website)",
		techStack: ["React.js"],
	},
	{
		projectTitle: "Ateneo Musicians' Pool Website (Mock Redesign)",
		url: "https://bfgonzalez.github.io/amp-website",
		projectDescription:
			"A mock redesign of the Ateneo Musicians' Pool website. The Ateneo Musicians' Pool (AMP) is a non-profit organization where individuals realize their holistic formation through music.",
		imageSource: ampWebsiteThumbnail,
		altText: "Ateneo Musicians' Pool (Mock Redesign)",
		techStack: ["HTML", "CSS", "JavaScript"],
	},
]

const ProjectTile = ({ content }) => {
	let {
		projectTitle,
		url,
		projectDescription,
		imageSource,
		altText,
		techStack,
	} = content

	return (
		<div className="columns">
			<div className="column is-6 mb-2">
				<div className="image">
					<img src={imageSource} alt={altText} />
				</div>
			</div>
			<div className="column is-6 mb-4">
				<h2 className="is-size-4 has-text-weight-bold">{projectTitle}</h2>
				<p className=" py-1">{projectDescription}</p>
				<Tags labels={techStack} />
				<a href={url} target="_blank" rel="noopener noreferrer">
					<button className="button is-primary has-text-weight-bold mt-1">
						View Demo
					</button>
				</a>
			</div>
			<hr />
		</div>
	)
}

const ProjectTiles = () => {
	return (
		<div>
			{projects.map((project, index) => (
				<div>
					<ProjectTile key={index} content={project} />
				</div>
			))}
		</div>
	)
}

export default ProjectTiles
