import React from 'react'
import { Link } from 'react-router-dom'

export const Thumb = ({ image }) => (
  <Link to={`/images/${image.id}`}>
    <div className="image-thumb">
      <img className="thumb" src={image.thumbnail} alt={image.title} />
    </div>
  </Link>
)
