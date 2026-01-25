import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import LeadForm from './components/LeadForm'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <LeadForm />
      </main>
      <Footer />
    </div>
  )
}

export default App
