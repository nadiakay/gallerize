import React from 'react'

import { useSelector } from 'react-redux'

import { sourceSelector } from '../slices/source'

export const Footer = () => {
  const { source } = useSelector(sourceSelector)

  return (
    <footer>
      <p>
        <bold>
          Site by <a href="https://github.com/nadiakay">Nadia</a>
        </bold>
      </p>
      {source === 'openverse' ? (
        <p>
          Images from <a href="https://wordpress.org/openverse/">Openverse</a>{' '}
          under Creative Commons license
        </p>
      ) : (
        <p>
          Images from{' '}
          <a href="https://jsonplaceholder.typicode.com/">JSONPlaceholder</a>
        </p>
      )}
    </footer>
  )
}
