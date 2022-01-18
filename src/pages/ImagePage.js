import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { ImageInfo } from '../components/ImageInfo'

import { sourceSelector } from '../slices/source'
import { fetchImage, imageSelector } from '../slices/image'

export const ImagePage = () => {
  const params = useParams()
  const dispatch = useDispatch()
  const {
    image,
    loading: imageLoading,
    hasErrors: imageHasErrors,
  } = useSelector(imageSelector)
  const { source } = useSelector(sourceSelector)

  useEffect(() => {
    const { id } = params

    dispatch(fetchImage(source, id))
  }, [params, dispatch, source])

  const renderImagePage = () => {
    if (imageLoading) return <p>Loading photo...</p>
    if (imageHasErrors) return <p>Failed to retrieve image.</p>

    return (
      <section>
        <h1>{image.title}</h1>
        <div className="img-backdrop">
          <img className="image" src={image.url} alt={image.title} />
        </div>
        {source === 'openverse' ? <ImageInfo image={image} /> : ''}
      </section>
    )
  }

  return renderImagePage()
}
