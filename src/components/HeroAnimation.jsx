import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const HeroAnimation = () => {
  const audioRef = useRef(null)
  const [audioPlaying, setAudioPlaying] = useState(false)

  useEffect(() => {
    // Force play music when component mounts
    const playAudio = async () => {
      if (audioRef.current) {
        try {
          audioRef.current.volume = 0.4
          audioRef.current.muted = false
          await audioRef.current.play()
          setAudioPlaying(true)
          console.log('Audio is playing')
        } catch (error) {
          console.log('Audio autoplay was prevented, will try on user interaction:', error)
          // Try to play on any user interaction
          document.addEventListener('click', handleUserInteraction, { once: true })
          document.addEventListener('keydown', handleUserInteraction, { once: true })
          document.addEventListener('touchstart', handleUserInteraction, { once: true })
        }
      }
    }

    const handleUserInteraction = () => {
      if (audioRef.current && !audioPlaying) {
        audioRef.current.play().then(() => {
          setAudioPlaying(true)
          console.log('Audio started after user interaction')
        }).catch(console.error)
      }
    }

    // Small delay to ensure component is mounted
    setTimeout(playAudio, 100)
    
    return () => {
      document.removeEventListener('click', handleUserInteraction)
      document.removeEventListener('keydown', handleUserInteraction)
      document.removeEventListener('touchstart', handleUserInteraction)
    }
  }, [audioPlaying])

  const handleAnimationClick = () => {
    if (audioRef.current && !audioPlaying) {
      audioRef.current.play().then(() => {
        setAudioPlaying(true)
        console.log('Audio started from animation click')
      }).catch(console.error)
    }
  }

  return (
    <motion.div 
      className="fixed inset-0 z-50 bg-gradient-to-br from-karate-black via-gray-900 to-karate-black overflow-hidden cursor-pointer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      onClick={handleAnimationClick}
    >
      {/* Background Music */}
      <audio 
        ref={audioRef}
        preload="auto"
        loop
        autoPlay
        playsInline
        muted={false}
        controls={false}
        style={{ display: 'none' }}
      >
        {/* Using a simple sound effect that should work */}
        <source src="data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHfctorC2QRmOsrgtN+kk2Q1r+7OyMHLIHhc9sqC2QRmOsrgtN+kk2Q1r+7OyMH" type="audio/wav" />
        <source src="https://www.soundjay.com/misc/sounds/bell-ringing-05.wav" type="audio/wav" />
        Your browser does not support the audio element.
      </audio>

      {/* Audio Control Button (if needed) */}
      {!audioPlaying && (
        <motion.button
          onClick={() => {
            if (audioRef.current) {
              audioRef.current.play().then(() => setAudioPlaying(true)).catch(console.error)
            }
          }}
          className="absolute top-4 right-4 z-30 bg-karate-red text-white px-4 py-2 rounded-full font-kyokushin text-sm hover:bg-red-700 transition-colors"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          🔊 Play Sound
        </motion.button>
      )}
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-karate-red to-transparent transform rotate-45"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-karate-red to-transparent transform -rotate-45"></div>
      </div>

      {/* Full Screen Karate Animation Background */}
      <div className="absolute inset-0 w-full h-full">
        <iframe
          src="https://giphy.com/embed/xT39DbK7gw2HLT4WXK"
          className="w-full h-full object-cover pointer-events-none opacity-40"
          style={{ 
            border: 'none',
            minWidth: '100%',
            minHeight: '100%'
          }}
          frameBorder="0"
          allowFullScreen
          title="Kyokushin Karate Fighter"
        />
        
        {/* Dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 font-kyokushin text-white drop-shadow-2xl">
              🥋 KYOKUSHIN KARATE
            </h1>
            <div className="text-xl md:text-2xl lg:text-3xl mb-6 font-japanese text-karate-red drop-shadow-lg">
              極真会館 • The Ultimate Truth
            </div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="text-lg md:text-xl lg:text-2xl text-white font-kyokushin mb-8 drop-shadow-lg"
            >
              OSU! • FIGHT SPIRIT • NEVER GIVE UP
            </motion.div>
          </motion.div>
          
          {/* Loading Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="flex flex-col items-center"
          >
            <div className="text-white text-lg mb-4 font-kyokushin drop-shadow-lg">
              Preparing the Dojo...
            </div>
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-karate-red rounded-full animate-bounce shadow-lg"></div>
              <div className="w-3 h-3 bg-karate-red rounded-full animate-bounce shadow-lg" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-3 h-3 bg-karate-red rounded-full animate-bounce shadow-lg" style={{ animationDelay: '0.2s' }}></div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Kyokushin Symbols */}
      <motion.div
        className="absolute top-10 right-10 text-4xl md:text-6xl opacity-30"
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      >
        ⚡
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-10 text-4xl md:text-6xl opacity-30"
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 10, -10, 0]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      >
        👊
      </motion.div>

      <motion.div
        className="absolute top-1/3 left-10 text-3xl md:text-5xl opacity-20"
        animate={{ 
          x: [0, 20, 0],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      >
        🥋
      </motion.div>
    </motion.div>
  )
}

export default HeroAnimation
