import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchImages, imagesSelector } from '../slices/images'
import { sourceSelector } from '../slices/source'

import { Form } from '../components/Form'
import { Thumb } from '../components/Thumb'

export const GalleryPage = () => {
  const dispatch = useDispatch()
  const { query, images, loading, hasErrors } = useSelector(imagesSelector)
  const { source } = useSelector(sourceSelector)

  useEffect(() => {
    dispatch(fetchImages(query, source))
  }, [dispatch, query, source])

  const renderImages = () => {
    if (loading) return <p>Loading images...</p>
    if (hasErrors) return <p>Error retrieving images.</p>

    return images.map((image) => (
      <Thumb key={image.id} image={image} source={source} />
    ))
  }

  return (
    <section>
      <h1 className="gallerize">Gallerize</h1>
      <Form />
      <h2>{query}</h2>
      <div className="gallery">{renderImages()}</div>
    </section>
  )
}
