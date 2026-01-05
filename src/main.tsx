import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Nav from './pages/Nav.tsx'
import Footer from './pages/Footer.tsx'
import App from './App.tsx'
import Home from './pages/Home.tsx'
import Blog from './pages/Blog.tsx'
import Contact from './pages/Contact.tsx'
import BehavioralAnimation from './pages/projects/BehavioralAnimation.tsx'
import WinterVillage from './pages/projects/WinterVillage.tsx'
import ParticleSystemFireworks from './pages/projects/ParticleSystemFireworks.tsx'
  
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/portfolio/" element={<App />} />
        <Route path="/portfolio/*" element={<App />} />
        <Route path="/portfolio/home" element={<Home />} />
        <Route path="/portfolio/blog" element={<Blog />} />
        <Route path="/portfolio/contact" element={<Contact />} />
        <Route path="/portfolio/winter-village" element={<WinterVillage />} />
        <Route path="/portfolio/behavioral-animation" element={<BehavioralAnimation />} />
        <Route path="/portfolio/particle-system-fireworks" element={<ParticleSystemFireworks />} />
        <Route path="*" element={<div className="not-found"><h2>404 - Page Not Found</h2></div>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>,
)
