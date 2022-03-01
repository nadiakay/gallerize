import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchImages, setQuery, imagesSelector } from '../slices/images'
import { sourceSelector } from '../slices/source'

import { Form } from '../components/Form'
import { Pager } from '../components/Pager'
import { Thumb } from '../components/Thumb'

export const GalleryPage = () => {
  const dispatch = useDispatch()
  const { query, page, totalPages, images, loading, hasErrors } =
    useSelector(imagesSelector)
  const { source } = useSelector(sourceSelector)

  useEffect(() => {
    if (!query && source === 'openverse') dispatch(setQuery('sunsets'))
    dispatch(fetchImages(query, page, source))
  }, [dispatch, query, page, source])

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
      <blockquote>
        Search from millions of images in the public domain or licensed under
        Creative Commons. Photos available through public APIs.
      </blockquote>
      <Form />
      <h2>{query.charAt(0).toUpperCase() + query.slice(1)}</h2>
      {source === 'openverse' ? (
        <Pager page={page} totalPages={totalPages} />
      ) : (
        ''
      )}
      <div className="gallery">{renderImages()}</div>
    </section>
  )
}
