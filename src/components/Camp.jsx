import { motion } from 'framer-motion'

const Camp = () => {
  const programs = [
    {
      title: "Beginner Kyokushin",
      duration: "2 Weeks",
      level: "Beginner",
      description: "Foundation of Kyokushin karate philosophy and basics",
      features: ["Basic Kata", "Conditioning", "Fighting Spirit", "Osu Philosophy"],
      price: "₹25,000",
      icon: "🥋"
    },
    {
      title: "Full Contact Fighter",
      duration: "4 Weeks",
      level: "Advanced",
      description: "Intensive full-contact fighting preparation",
      features: ["Kumite Training", "Iron Body Conditioning", "Tournament Prep", "Mental Toughness"],
      price: "₹50,000",
      icon: "🔥"
    },
    {
      title: "Kyokushin Master Class",
      duration: "6 Weeks",
      level: "Expert",
      description: "Elite training with authentic Kyokushin masters",
      features: ["Advanced Kata", "Kyokushin Philosophy", "Teaching Methods", "Black Belt Mastery"],
      price: "₹83,000",
      icon: "⚡"
    }
  ]

  const instructors = [
    { name: "Sensei Mas Oyama", rank: "10th Dan", specialty: "Kyokushin Founder" },
    { name: "Sensei Hiroshi", rank: "9th Dan", specialty: "Full Contact Kumite" },
    { name: "Sensei Takeshi", rank: "8th Dan", specialty: "Traditional Kata" }
  ]

  return (
    <section id="camp" className="py-20 px-4 bg-gradient-to-b from-gray-900 to-karate-black">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-6 font-kyokushin">
            🏕️ <span className="text-karate-red">KYOKUSHIN TRAINING CAMP</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-kyokushin">
            Intensive Kyokushin training programs designed to forge your fighting spirit. 
            Train with authentic Kyokushin masters in the traditional way.
          </p>
        </motion.div>

        {/* Training Programs */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="card bg-gradient-to-br from-gray-800 to-gray-900 p-6 border border-karate-red border-opacity-30"
            >
              <div className="text-center mb-6">
                <div className="text-5xl mb-3">{program.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-2 font-kyokushin">
                  {program.title}
                </h3>
                <div className="flex justify-center space-x-4 text-sm">
                  <span className="bg-karate-red text-white px-3 py-1 rounded-full">
                    {program.duration}
                  </span>
                  <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full">
                    {program.level}
                  </span>
                </div>
              </div>

              <p className="text-gray-400 text-center mb-6">
                {program.description}
              </p>

              <div className="space-y-3 mb-6">
                {program.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-gray-300">
                    <span className="text-karate-red mr-3">✓</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <div className="text-3xl font-bold text-karate-red mb-4">
                  {program.price}
                </div>
                <button className="btn-primary w-full">
                  Enroll Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Instructors Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-karate-red to-red-700 rounded-2xl p-8"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-8 font-kyokushin">
            👨‍🏫 KYOKUSHIN MASTERS
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {instructors.map((instructor, index) => (
              <motion.div
                key={instructor.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white bg-opacity-10 rounded-xl p-6 text-center backdrop-blur-sm"
              >
                <div className="text-4xl mb-3">🥋</div>
                <h4 className="text-xl font-bold text-white mb-2">
                  {instructor.name}
                </h4>
                <div className="text-red-200 mb-2">{instructor.rank}</div>
                <div className="text-red-100 text-sm">{instructor.specialty}</div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-red-100 text-lg mb-6 font-kyokushin">
              Learn from authentic Kyokushin masters with decades of experience
            </p>
            <button className="bg-white text-karate-red px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300">
              Meet Our Team
            </button>
          </div>
        </motion.div>

        {/* Camp Features */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            { icon: "🏠", title: "Accommodation", desc: "Modern facilities" },
            { icon: "🍱", title: "Meals Included", desc: "Nutritious food" },
            { icon: "🏥", title: "Medical Support", desc: "24/7 care available" },
            { icon: "📋", title: "Certification", desc: "Official certificates" }
          ].map((feature, index) => (
            <div key={feature.title} className="text-center text-white">
              <div className="text-4xl mb-3">{feature.icon}</div>
              <h4 className="font-bold mb-2">{feature.title}</h4>
              <p className="text-gray-400 text-sm">{feature.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Camp
