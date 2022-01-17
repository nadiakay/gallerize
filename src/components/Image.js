import React from 'react'

export const Image = ({ image }) => (
  <article className={'image'}>
    <h2>{image.title}</h2>
    <img src={image.thumbnailUrl} alt={image.title} />
  </article>
)
