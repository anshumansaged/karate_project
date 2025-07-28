import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import HeroAnimation from './components/HeroAnimation'
import Hero from './components/Hero'
import Tournament from './components/Tournament'
import Camp from './components/Camp'
import Dojo from './components/Dojo'
import Footer from './components/Footer'

function App() {
  const [showHeroAnimation, setShowHeroAnimation] = useState(true)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHeroAnimation(false)
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (showHeroAnimation) {
    return <HeroAnimation />
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-karate-black via-gray-900 to-karate-black">
      <Navbar />
      
      <main className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Hero />
        <Tournament />
        <Camp />
        <Dojo />
      </main>
      
      <Footer />
    </div>
  )
}

export default App
