import React from 'react'

export const Image = ({ image }) => (
  <div className="image">
    <img src={image.thumbnailUrl} alt={image.title} />
  </div>
)
