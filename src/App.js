import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'

import { Layout } from './routes/Layout'
import { Gallery } from './routes/Gallery'
import { Image } from './routes/Image'

const App = () => {
  return (
    <div className="app">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Gallery />} />
            <Route path="/:source/:id" element={<Image />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
