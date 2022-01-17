import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Footer } from './components/Footer'
import { GalleryPage } from './pages/GalleryPage'
import { ImagePage } from './pages/ImagePage'

const App = () => {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<GalleryPage />} />
          <Route exact path="/images/:id" element={<ImagePage />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  )
}

export default App
