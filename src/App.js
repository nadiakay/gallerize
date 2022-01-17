import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Dashboard from './pages/DashboardPage'
import Images from './pages/ImagesPage'
import Image from './pages/ImagePage'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/images" element={<Images />} />
        <Route exact path="/images/:id" element={<Image />} />
      </Routes>
    </Router>
  )
}

export default App
