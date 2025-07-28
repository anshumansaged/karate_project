import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-karate-red to-transparent transform rotate-12"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-karate-red to-transparent transform -rotate-12"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-bold text-white mb-6 font-kyokushin"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="text-karate-red">KYOKUSHIN</span>
            <br />
            <span className="text-white">KARATE</span>
            <div className="text-2xl md:text-3xl mt-4 font-japanese text-gray-300">
              極真空手 • The Ultimate Truth
            </div>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed font-kyokushin"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <span className="text-karate-red font-bold text-2xl md:text-3xl">OSU!</span>
            <br />
            Discipline • Respect • Perseverance
            <br />
            <span className="text-karate-red font-semibold">Full Contact Karate - No Compromise</span>
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <button className="btn-primary text-lg px-8 py-4 font-kyokushin">
              🥋 Join Our Dojo
            </button>
            <button className="border-2 border-karate-red text-karate-red px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-karate-red hover:text-white font-kyokushin">
              🏆 Kyokushin Tournaments
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-4xl font-bold text-karate-red mb-2">500+</div>
              <div className="text-gray-300">Kyokushin Warriors</div>
              <div className="text-sm text-karate-red mt-1">OSU!</div>
            </motion.div>
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-4xl font-bold text-karate-red mb-2">15+</div>
              <div className="text-gray-300">Years Training</div>
              <div className="text-sm text-karate-red mt-1">Never Give Up</div>
            </motion.div>
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-4xl font-bold text-karate-red mb-2">50+</div>
              <div className="text-gray-300">Tournaments Won</div>
              <div className="text-sm text-karate-red mt-1">Fighting Spirit</div>
            </motion.div>
          </motion.div>

          {/* Kyokushin Techniques Showcase */}
          <motion.div 
            className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            {[
              { name: "Seiza", emoji: "🧘‍♂️", desc: "Meditation" },
              { name: "Mae Geri", emoji: "🦵", desc: "Front Kick" },
              { name: "Gyaku Zuki", emoji: "👊", desc: "Reverse Punch" },
              { name: "Kata", emoji: "🥋", desc: "Forms Practice" }
            ].map((technique, index) => (
              <motion.div
                key={technique.name}
                className="text-center bg-karate-black bg-opacity-30 rounded-xl p-4 backdrop-blur-sm border border-karate-red border-opacity-20"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4 + index * 0.1, duration: 0.5 }}
                whileHover={{ 
                  scale: 1.1, 
                  backgroundColor: "rgba(220, 38, 38, 0.1)",
                  borderColor: "rgba(220, 38, 38, 0.5)"
                }}
              >
                <motion.div 
                  className="text-3xl mb-2"
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: index * 0.5
                  }}
                >
                  {technique.emoji}
                </motion.div>
                <div className="text-karate-red font-kyokushin font-bold">
                  {technique.name}
                </div>
                <div className="text-gray-400 text-sm">
                  {technique.desc}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Animated Karate Icons */}
        <motion.div 
          className="absolute top-1/4 left-10 text-6xl opacity-30"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
          🥋
        </motion.div>
        
        <motion.div 
          className="absolute top-1/3 right-10 text-6xl opacity-30"
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -5, 5, 0],
            x: [0, 10, 0]
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
          }}
        >
          👊
        </motion.div>

        <motion.div 
          className="absolute bottom-1/3 right-1/4 text-5xl opacity-25"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            opacity: [0.25, 0.4, 0.25]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "linear",
            delay: 2
          }}
        >
          ⚡
        </motion.div>

        <motion.div 
          className="absolute top-1/2 left-1/4 text-4xl opacity-20"
          animate={{ 
            x: [0, 30, 0],
            y: [0, -15, 0],
            rotate: [0, 15, -15, 0]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 0.5
          }}
        >
          🦵
        </motion.div>

        <motion.div 
          className="absolute bottom-1/4 left-1/3 text-5xl opacity-25"
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, -10, 10, 0],
            opacity: [0.25, 0.4, 0.25]
          }}
          transition={{ 
            duration: 7, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 3
          }}
        >
          🤜
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="text-white text-sm mb-2">Scroll Down</div>
        <div className="w-6 h-10 border-2 border-karate-red rounded-full flex justify-center">
          <div className="w-1 h-3 bg-karate-red rounded-full mt-2 animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
