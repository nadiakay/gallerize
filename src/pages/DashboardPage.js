import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => (
  <section>
    <h1>Gallerize</h1>
    <p>This is the dashboard.</p>
    <Link to="/images" className="button">
      View Gallery
    </Link>
  </section>
)

export default Dashboard
