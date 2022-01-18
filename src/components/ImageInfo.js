import React from 'react'

export const ImageInfo = ({ image }) => {
  return (
    <table className="image-info">
      <tbody>
        <tr>
          <th>Title</th>
          <td>{image.title}</td>
        </tr>
        <tr>
          <th>Attribution</th>
          <td>{image.attribution}</td>
        </tr>
        <tr>
          <td>{<a href={image.url}>Link</a>}</td>
        </tr>
      </tbody>
    </table>
  )
}
