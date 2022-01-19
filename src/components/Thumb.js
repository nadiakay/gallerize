import React from 'react'
import { Link } from 'react-router-dom'

export const Thumb = ({ image, source }) => (
  <Link to={`/${source}/${image.id}`}>
    <div className="thumb-container">
      <img
        className="thumb"
        src={source === 'openverse' ? image.thumbnail : image.thumbnailUrl}
        alt={image.title}
      />
    </div>
  </Link>
)
