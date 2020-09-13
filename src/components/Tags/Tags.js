import React from "react"

const Tags = ({ labels }) => {
  return (
    <div className="tags">
      {labels.map((label, index) => (
        <span className="tag is-size-6" key={index}>
          {label}
        </span>
      ))}
    </div>
  )
}

export default Tags
