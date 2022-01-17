import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchImages, imagesSelector } from '../slices/images'

import { Image } from '../components/Image'

const Images = () => {
  const dispatch = useDispatch()
  const { images, loading, hasErrors } = useSelector(imagesSelector)

  useEffect(() => {
    dispatch(fetchImages())
  }, [dispatch])

  const renderImages = () => {
    if (loading) return <p>Loading images,,,</p>
    if (hasErrors) return <p>Error retrieving images.</p>

    return images.map((image) => <Image key={image.id} image={image} excerpt />)
  }

  return (
    <section>
      <h1>Gallery</h1>
      <div className="gallery">{renderImages()}</div>
    </section>
  )
}

export default Images
