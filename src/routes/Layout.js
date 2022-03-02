import { Link, Outlet } from 'react-router-dom'

import { useSelector } from 'react-redux'

import { sourceSelector } from '../slices/source'

import gitLogo from '../GitHub-Mark-Light-32px.png'

export const Layout = () => {
  const { source } = useSelector(sourceSelector)

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/" className="gallerize">
              Gallerize
            </Link>
          </li>
          <li>
            <a href="https://github.com/nadiakay/gallerize">
              Github&nbsp;&nbsp;
              <img className="icon" src={gitLogo} alt="Github logo"></img>
            </a>
          </li>
        </ul>
      </nav>
      <Outlet />
      <footer>
        <p>
          Site by <a href="https://github.com/nadiakay">Nadia</a>
        </p>
        {source === 'openverse' ? (
          <p>
            Images from <a href="https://wordpress.org/openverse/">Openverse</a>{' '}
            under Creative Commons license
          </p>
        ) : (
          <p>
            Images from{' '}
            <a href="https://jsonplaceholder.typicode.com/">JSONPlaceholder</a>
          </p>
        )}
      </footer>
    </div>
  )
}
