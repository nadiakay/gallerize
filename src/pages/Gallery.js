import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchImages, imagesSelector } from '../slices/images'

import { SearchForm } from '../components/SearchForm'
import { Thumb } from '../components/Thumb'

const Gallery = () => {
  const dispatch = useDispatch()
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
      <SearchForm />
      <h2>{query}</h2>
      <div className="gallery">{renderImages()}</div>
    </section>
  )
}

export default Gallery
