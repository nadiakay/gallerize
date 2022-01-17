import React from 'react'
import { Link } from 'react-router-dom'

export const ImageThumb = ({ image }) => (
  <Link to={`/images/${image.id}`}>
    <div className="image-thumb">
      <img src={image.thumbnail} alt={image.title} />
    </div>
  </Link>
)
