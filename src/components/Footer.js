import React from 'react'

import { useSelector } from 'react-redux'

import { sourceSelector } from '../slices/source'

export const Footer = () => {
  const { source } = useSelector(sourceSelector)

  return (
    <div className="footer">
      {source === 'openverse' ? (
        <span>
          Images from <a href="https://wordpress.org/openverse/">Openverse</a>
          under Creative Commons license
        </span>
      ) : (
        <span>
          Images from{' '}
          <a href="https://jsonplaceholder.typicode.com/">JSONPlaceholder</a>
        </span>
      )}
    </div>
  )
}
