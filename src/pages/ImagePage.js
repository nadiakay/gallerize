import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { fetchImage, imageSelector } from '../slices/image'

const ImagePage = () => {
  const params = useParams()
  const dispatch = useDispatch()
  const {
    image,
    loading: imageLoading,
    hasErrors: imageHasErrors,
  } = useSelector(imageSelector)
  console.log(useSelector(imageSelector))

  useEffect(() => {
    const { id } = params

    dispatch(fetchImage(id))
  }, [dispatch, params])

  const renderImagePage = () => {
    if (imageLoading) return <p>Loading photo...</p>
    if (imageHasErrors) return <p>Failed to retrieve image.</p>

    return (
      <section>
        <h1>{image.title}</h1>
        <img className="image" src={image.url} alt={image.title} />
      </section>
    )
  }

  return renderImagePage()
}

export default ImagePage
