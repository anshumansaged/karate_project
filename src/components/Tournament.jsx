import { motion } from 'framer-motion'

const Tournament = () => {
  const tournaments = [
    {
      title: "Kyokushin World Championship",
      date: "March 15-17, 2025",
      location: "Tokyo Kyokushin Honbu",
      description: "The ultimate test of Kyokushin karate fighting spirit",
      prize: "₹42,00,000",
      icon: "🏆"
    },
    {
      title: "All-Japan Full Contact",
      date: "April 20-22, 2025",
      location: "Osaka Kyokushin Dojo",
      description: "Traditional bare-knuckle Kyokushin fighting championship",
      prize: "₹21,00,000",
      icon: "👊"
    },
    {
      title: "Kyokushin Kata Tournament",
      date: "May 10-12, 2025",
      location: "Kyoto Traditional Dojo",
      description: "Demonstration of traditional Kyokushin kata forms",
      prize: "₹12,50,000",
      icon: "🥋"
    }
  ]

  return (
    <section id="tournament" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-6 font-kyokushin">
            🏆 <span className="text-karate-red">KYOKUSHIN TOURNAMENTS</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-kyokushin">
            Test your fighting spirit in traditional Kyokushin competitions. 
            Full contact, no protective gear - only the strongest survive.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tournaments.map((tournament, index) => (
            <motion.div
              key={tournament.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="card p-6 bg-gradient-to-br from-gray-800 to-gray-900 border border-karate-red border-opacity-20"
            >
              <div className="text-center mb-4">
                <div className="text-6xl mb-4">{tournament.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-2 font-kyokushin">
                  {tournament.title}
                </h3>
              </div>

              <div className="space-y-3 text-gray-300">
                <div className="flex items-center">
                  <span className="text-karate-red mr-2">📅</span>
                  <span>{tournament.date}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-karate-red mr-2">📍</span>
                  <span>{tournament.location}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-karate-red mr-2">💰</span>
                  <span className="font-semibold text-karate-red">{tournament.prize}</span>
                </div>
              </div>

              <p className="text-gray-400 mt-4 mb-6 leading-relaxed">
                {tournament.description}
              </p>

              <div className="flex space-x-3">
                <button className="btn-primary flex-1 text-sm">
                  Register Now
                </button>
                <button className="border border-karate-red text-karate-red px-4 py-2 rounded-lg text-sm hover:bg-karate-red hover:text-white transition-all duration-300">
                  Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Championship Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-karate-red to-red-700 rounded-2xl p-8 text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-4 font-kyokushin">
            🏅 BECOME A KYOKUSHIN WARRIOR
          </h3>
          <p className="text-xl text-red-100 mb-6 font-kyokushin">
            Train hard, fight hard, never give up - The Kyokushin way
          </p>
          <button className="bg-white text-karate-red px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300">
            Start Training Today
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Tournament
