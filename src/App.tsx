import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'

// import './App.css'
// import './styles/globals.css'
import Home from './pages/Home'

function App() {
  return (
    <div className="container grid">
      <div className="content-wrapper">
        <div className="content-body">
          <BrowserRouter basename="/90s-aesthetic">
            {/* <Navbar /> */}
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="/about" element={<About />} />
              <Route path="/work" element={<Work />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} /> */}
            </Routes>
            {/* <Footer /> */}
          </BrowserRouter>
        </div>
      </div>
    </div>
  )
}

export default App
