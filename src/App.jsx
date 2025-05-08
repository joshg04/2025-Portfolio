import { useState } from 'react'
import './App.css'
import Sidebar from './components/sidebar'
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';


function App() {

  return (
    <div className="flex">
      <Sidebar />
      <main>
        <div className="section-content">
          <section id="about" className="snap-section"><About /></section>
        </div>

        <div className="section-content">
          <section id="projects" className="snap-section"><Projects /></section>
        </div>

        <div className="section-content">
          <section id="experience" className="snap-section"><Experience /></section>
        </div>
      </main>
    </div>
  )
}

export default App
