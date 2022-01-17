import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Dashboard from './pages/Dashboard'
import Images from './pages/Images'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/images" element={<Images />} />
      </Routes>
    </Router>
  )
}

export default App
