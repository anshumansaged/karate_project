import { motion } from 'framer-motion'

const Dojo = () => {
  const facilities = [
    {
      title: "Main Training Hall",
      description: "5000 sq ft traditional dojo with wooden floors",
      features: ["Traditional Tatami Mats", "Mirror Walls", "Sound System"],
      icon: "🏛️"
    },
    {
      title: "Strength & Conditioning",
      description: "Modern gym equipment for martial arts training",
      features: ["Free Weights", "Cardio Equipment", "Flexibility Area"],
      icon: "💪"
    },
    {
      title: "Meditation Room",
      description: "Peaceful space for mental training and meditation",
      features: ["Quiet Environment", "Traditional Decor", "Group Sessions"],
      icon: "🧘"
    },
    {
      title: "Locker Rooms",
      description: "Clean, modern facilities with all amenities",
      features: ["Individual Lockers", "Showers", "Changing Areas"],
      icon: "🚿"
    }
  ]

  const classes = [
    { name: "Kids Kyokushin", time: "4:00 PM - 5:00 PM", days: "Mon, Wed, Fri" },
    { name: "Adult Beginner", time: "6:00 PM - 7:30 PM", days: "Tue, Thu" },
    { name: "Full Contact Training", time: "7:30 PM - 9:00 PM", days: "Mon, Wed, Fri" },
    { name: "Kumite (Sparring)", time: "10:00 AM - 11:30 AM", days: "Saturday" },
    { name: "Kata & Philosophy", time: "9:00 AM - 10:00 AM", days: "Sunday" }
  ]

  return (
    <section id="dojo" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-6 font-kyokushin">
            🏛️ <span className="text-karate-red">KYOKUSHIN HONBU DOJO</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-kyokushin">
            Step into our authentic Kyokushin dojo where traditional Japanese martial arts 
            meet the ultimate test of fighting spirit and physical conditioning.
          </p>
        </motion.div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {facilities.map((facility, index) => (
            <motion.div
              key={facility.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card bg-gradient-to-br from-gray-800 to-gray-900 p-6 border border-karate-red border-opacity-20"
            >
              <div className="flex items-start space-x-4">
                <div className="text-5xl">{facility.icon}</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3 font-kyokushin">
                    {facility.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {facility.description}
                  </p>
                  <div className="space-y-2">
                    {facility.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-gray-300">
                        <span className="text-karate-red mr-3">•</span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Class Schedule */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-karate-black to-gray-900 rounded-2xl p-8 mb-16"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-8 font-kyokushin">
            📅 TRAINING SCHEDULE
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {classes.map((classInfo, index) => (
              <motion.div
                key={classInfo.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white bg-opacity-5 rounded-lg p-4 border border-karate-red border-opacity-30 hover:border-opacity-60 transition-all duration-300"
              >
                <h4 className="text-lg font-bold text-karate-red mb-2">
                  {classInfo.name}
                </h4>
                <div className="text-white mb-1">
                  <span className="text-gray-400">Time:</span> {classInfo.time}
                </div>
                <div className="text-white">
                  <span className="text-gray-400">Days:</span> {classInfo.days}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="btn-primary text-lg px-8 py-3">
              View Full Schedule
            </button>
          </div>
        </motion.div>

        {/* Location & Contact */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* Location */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-karate-red border-opacity-20">
            <h3 className="text-2xl font-bold text-white mb-4 font-kyokushin">
              📍 Dojo Location
            </h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center">
                <span className="text-karate-red mr-3">🏠</span>
                <span>123 Martial Arts Boulevard</span>
              </div>
              <div className="flex items-center">
                <span className="text-karate-red mr-3">🌆</span>
                <span>Tokyo, Japan 100-0001</span>
              </div>
              <div className="flex items-center">
                <span className="text-karate-red mr-3">🚇</span>
                <span>5 min walk from Shibuya Station</span>
              </div>
              <div className="flex items-center">
                <span className="text-karate-red mr-3">🅿️</span>
                <span>Free parking available</span>
              </div>
            </div>
            <button className="btn-primary mt-4 w-full">
              Get Directions
            </button>
          </div>

          {/* Hours */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-karate-red border-opacity-20">
            <h3 className="text-2xl font-bold text-white mb-4 font-kyokushin">
              🕐 Training Hours
            </h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex justify-between">
                <span>Monday - Friday</span>
                <span className="text-karate-red">6:00 AM - 10:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span className="text-karate-red">8:00 AM - 8:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span className="text-karate-red">9:00 AM - 6:00 PM</span>
              </div>
              <div className="border-t border-gray-700 pt-3 mt-4">
                <div className="flex justify-between text-sm">
                  <span>Holiday Hours</span>
                  <span className="text-karate-red">Call for info</span>
                </div>
              </div>
            </div>
            <button className="border border-karate-red text-karate-red px-6 py-2 rounded-lg mt-4 w-full hover:bg-karate-red hover:text-white transition-all duration-300">
              Contact Us
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Dojo
