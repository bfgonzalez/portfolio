import React from "react"

const Tags = ({ labels }) => {
	return (
		<div className="tags">
			{labels.map((label, index) => (
				<span className="tag has-text-weight-bold" key={index}>
					{label}
				</span>
			))}
		</div>
	)
}

export default Tags
