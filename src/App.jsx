import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Publications from './components/Publications'
import Contact from './components/Contact'
import Navigation from './components/Navigation'
import Chatbot from './components/Chatbot'

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Publications />
      <Contact />
      <Chatbot />
    </div>
  )
}

export default App

