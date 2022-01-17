import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setQuery, fetchImages, imagesSelector } from '../slices/images'

import { Thumb } from '../components/Thumb'

const Gallery = () => {
  const dispatch = useDispatch()
  const [searchQuery, setSearchQuery] = useState('')
  const { query, images, loading, hasErrors } = useSelector(imagesSelector)

  useEffect(() => {
    dispatch(fetchImages(query))
  }, [query, dispatch])

  const renderImages = () => {
    if (loading) return <p>Loading images...</p>
    if (hasErrors) return <p>Error retrieving images.</p>

    return images.map((image) => <Thumb key={image.id} image={image} />)
  }

  return (
    <section>
      <h1 className="gallerize">Gallerize</h1>
      <form
        className="search"
        onSubmit={(e) => {
          e.preventDefault()
          e.currentTarget.reset()
          if (!loading && searchQuery) {
            dispatch(setQuery(searchQuery))
            setSearchQuery('')
          }
        }}
      >
        <input
          type="text"
          placeholder="search..."
          className="searchBar"
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
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
      </form>
      <h2>{query}</h2>
      <div className="gallery">{renderImages()}</div>
    </section>
  )
}

export default Gallery
