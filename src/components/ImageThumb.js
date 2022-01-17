import React from 'react'

export const ImageThumb = ({ image }) => (
  <div className="image-thumb">
    <img src={image.thumbnailUrl} alt={image.title} />
  </div>
)
