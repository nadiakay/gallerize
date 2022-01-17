import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchImages, imagesSelector } from '../slices/images'

import { ImageThumb } from '../components/ImageThumb'

const Images = () => {
  const dispatch = useDispatch()
  const { query, images, loading, hasErrors } = useSelector(imagesSelector)

  useEffect(() => {
    dispatch(fetchImages(query))
  }, [query, dispatch])

  const renderImages = () => {
    if (loading) return <p>Loading images,,,</p>
    if (hasErrors) return <p>Error retrieving images.</p>

    return images.map((image) => <ImageThumb key={image.id} image={image} />)
  }

  return (
    <section>
      <h1>Gallery</h1>
      <div className="gallery">{renderImages()}</div>
    </section>
  )
}

export default Images
