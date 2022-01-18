import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { sourceSelector } from '../slices/source'

import { setQuery } from '../slices/images'
import { setSource } from '../slices/source'

export const Form = () => {
  const dispatch = useDispatch()
  const { source } = useSelector(sourceSelector)

  const [newQuery, setNewQuery] = useState('sunsets')
  const [newSource, setNewSource] = useState(source)

  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault()
        e.currentTarget.reset()
        dispatch(setSource(newSource))
        if (newSource === 'openverse') {
          dispatch(setQuery(newQuery))
        }
        setNewQuery('')
      }}
    >
      <div className="select-source">
        <input
          type="radio"
          id="jsonplaceholder"
          name="sources"
          value="jsonplaceholder"
          onChange={(e) => setNewSource('jsonplaceholder')}
          checked={newSource === 'jsonplaceholder'}
        />
        <label htmlFor="jsonplaceholder">JSONPlaceholder</label>
        <input
          type="radio"
          id="openverse"
          name="sources"
          value="openverse"
          onChange={(e) => setNewSource('openverse')}
          checked={newSource === 'openverse'}
        />
        <label htmlFor="openverse">Openverse</label>
      </div>
      <div className="search">
        <input
          type="text"
          placeholder="sunsets"
          className="search-bar"
          onChange={(e) => setNewQuery(e.target.value)}
          value={newQuery}
          disabled={newSource === 'jsonplaceholder'}
        />
        <button type="submit" className="button">
          <svg height="32" width="32">
            <path
              d="M19.427 21.427a8.5 8.5 0 1 1 2-2l5.585 5.585c.55.55.546 1.43 0 1.976l-.024.024a1.399 1.399 0 0 1-1.976 0l-5.585-5.585zM14.5 21a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13z"
              fill="#333"
              fillRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </form>
  )
}
