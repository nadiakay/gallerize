import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/" className="gallerize">
            Gallerize
          </Link>
        </li>
        <li>
          <Link to="https://github.com/nadiakay/gallerize">Github</Link>
        </li>
      </ul>
    </nav>
  )
}
