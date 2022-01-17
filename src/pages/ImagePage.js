import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchImage, imageSelector } from '../slices/image'

const ImagePage = ({ match }) => {
  const dispatch = useDispatch()
  const {
    image,
    loading: imageLoading,
    hasErrors: imageHasErrors,
  } = useSelector(imageSelector)

  useEffect(() => {
    const { id } = match.params

    dispatch(fetchImage(id))
  }, [dispatch, match])

  const renderImagePage = () => {
    if (imageLoading) return <p>Loading photo...</p>
    if (imageHasErrors) return <p>Failed to retrieve image.</p>

    return (
      <section>
        <h1>{image.title}</h1>
        <img src={image.url} alt={image.title} />
      </section>
    )
  }

  return renderImagePage()
}

export default ImagePage
