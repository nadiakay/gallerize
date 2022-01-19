import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'

import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { GalleryPage } from './pages/GalleryPage'
import { ImagePage } from './pages/ImagePage'

const App = () => {
  return (
    <div className="app">
      <HashRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<GalleryPage />} />
          <Route exact path="/:source/:id" element={<ImagePage />} />
        </Routes>
      </HashRouter>
      <Footer />
    </div>
  )
}

export default App
