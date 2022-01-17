import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Gallery from './pages/Gallery'
import Image from './pages/ImagePage'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Gallery />} />
        <Route exact path="/images/:id" element={<Image />} />
      </Routes>
    </Router>
  )
}

export default App
