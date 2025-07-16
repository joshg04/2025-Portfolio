import { useState, useEffect, useRef } from 'react'
import './App.css'
import Sidebar from './components/sidebar'
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';


function App() {
  const [activeSection, setActiveSection] = useState('about');
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);

  useEffect(() => {
    const sectionRefs = [
      { id: 'about', ref: aboutRef },
      { id: 'projects', ref: projectsRef },
      { id: 'experience', ref: experienceRef },
    ];
    const observer = new window.IntersectionObserver(
      (entries) => {
        const visible = entries.filter(e => e.isIntersecting);
        if (visible.length > 0) {
          // Sort by y-position (top-most in viewport)
          visible.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
          setActiveSection(visible[0].target.id);
        }
      },
      { root: null, rootMargin: '0px 0px -60% 0px', threshold: 0.1 }
    );
    sectionRefs.forEach(({ ref }) => {
      if (ref.current) observer.observe(ref.current);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex">
      <Sidebar activeSection={activeSection} sectionRefs={{
        about: aboutRef,
        projects: projectsRef,
        experience: experienceRef
      }} />
      <main>
        <div className="section-content">
          <section id="about" className="snap-section" ref={aboutRef}><About /></section>
        </div>
        <div className="section-content">
          <section id="projects" className="snap-section" ref={projectsRef}><Projects /></section>
        </div>
        <div className="section-content">
          <section id="experience" className="snap-section" ref={experienceRef}><Experience /></section>
        </div>
      </main>
    </div>
  );
}

export default App
