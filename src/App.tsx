import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'

// import './App.css'
// import './styles/globals.css'
import Home from './pages/Home'
import Navigation from './components/Navigation'
// import Footer from './components/Footer'
// import About from './pages/About'
// import Work from './pages/Work'
// import Blog from './pages/Blog'
// import Contact from './pages/Contact'

function App() {
  return (
    <div className="container grid">
      <div className="content-wrapper">
        <div className="content-body">
          <BrowserRouter basename="/90s-aesthetic">
            <Navigation />
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
