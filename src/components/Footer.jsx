import { useState } from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
  const [showGalleryModal, setShowGalleryModal] = useState(false)

  const galleryImages = [
    { id: 1, title: "Tournament Victory", emoji: "🏆" },
    { id: 2, title: "Training Session", emoji: "🥋" },
    { id: 3, title: "Shihan Vasant Kumar Singh", emoji: "🥇" },
    { id: 4, title: "Kids Class", emoji: "👶" },
    { id: 5, title: "Belt Ceremony", emoji: "🎖️" },
    { id: 6, title: "Sparring Practice", emoji: "🤼" }
  ]

  const socialLinks = [
    { name: "Instagram", icon: "📸", url: "#" },
    { name: "YouTube", icon: "📺", url: "#" },
    { name: "Facebook", icon: "👥", url: "#" },
    { name: "Twitter", icon: "🐦", url: "#" }
  ]

  return (
    <>
      <footer className="bg-karate-black text-white pt-16 pb-8 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-karate-red to-transparent transform rotate-45"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold font-kyokushin text-karate-red mb-6">
                Contact Us
              </h3>
              
              <motion.div 
                className="flex items-center space-x-3 cursor-pointer group"
                whileHover={{ scale: 1.05, x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="text-2xl group-hover:animate-bounce">📧</span>
                <div>
                  <div className="font-semibold group-hover:text-karate-red transition-colors">
                    Email
                  </div>
                  <div className="text-gray-300 text-sm">
                    kyokushin@honbudojo.com
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-center space-x-3 cursor-pointer group"
                whileHover={{ scale: 1.05, x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="text-2xl group-hover:animate-bounce">📞</span>
                <div>
                  <div className="font-semibold group-hover:text-karate-red transition-colors">
                    Phone
                  </div>
                  <div className="text-gray-300 text-sm">
                    +916291209133
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-center space-x-3 cursor-pointer group"
                whileHover={{ scale: 1.05, x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
                onClick={() => setShowGalleryModal(true)}
              >
                <span className="text-2xl group-hover:animate-bounce">🖼️</span>
                <div>
                  <div className="font-semibold group-hover:text-karate-red transition-colors">
                    Gallery
                  </div>
                  <div className="text-gray-300 text-sm">
                    View our photos
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold font-kyokushin text-karate-red mb-6">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {['Home', 'About', 'Classes', 'Tournaments', 'Contact'].map((link) => (
                  <motion.li 
                    key={link}
                    whileHover={{ x: 10, color: '#dc2626' }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <a href={`#${link.toLowerCase()}`} className="text-gray-300 hover:text-karate-red transition-colors cursor-pointer">
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Programs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold font-kyokushin text-karate-red mb-6">
                Programs
              </h3>
              <ul className="space-y-3">
                {['Kids Kyokushin', 'Adult Classes', 'Full Contact Team', 'Private Training', 'Summer Gasshuku'].map((program) => (
                  <motion.li 
                    key={program}
                    whileHover={{ x: 10, color: '#dc2626' }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <a href="#" className="text-gray-300 hover:text-karate-red transition-colors cursor-pointer">
                      {program}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Dojo Philosophy */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold font-kyokushin text-karate-red mb-6">
                Chief Instructor
              </h3>
              <motion.div 
                className="text-center p-6 bg-gradient-to-br from-karate-red to-red-700 rounded-xl"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-4xl mb-3">�</div>
                <div className="text-xl font-bold mb-2 font-kyokushin text-white">
                  Shihan Vasant Kumar Singh
                </div>
                <div className="text-red-100 text-sm mb-2 font-kyokushin">
                  Country Director • 6th Dan Black Belt
                </div>
                <div className="text-red-100 text-xs leading-relaxed font-kyokushin">
                  Leading India's Kyokushin movement with dedication, 
                  honor and the true spirit of OSU!
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Kyokushin Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <motion.div 
              className="bg-gradient-to-br from-gray-900 to-karate-black p-8 rounded-2xl border border-karate-red border-opacity-30"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-5xl mb-4">🥋</div>
              <div className="text-2xl font-bold mb-4 font-kyokushin text-karate-red">
                "Discipline. Strength. Honor."
              </div>
              <div className="text-gray-300 text-base leading-relaxed font-kyokushin max-w-2xl mx-auto">
                The way of Kyokushin is not just physical training, 
                but a path to spiritual growth and ultimate truth. 
                Through discipline and perseverance, we forge the spirit of the warrior.
              </div>
            </motion.div>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="border-t border-gray-800 pt-8 mb-8"
          >
            <h3 className="text-xl font-bold text-center mb-6 text-karate-red font-kyokushin">
              Follow Our Journey
            </h3>
            <div className="flex justify-center space-x-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  className="flex items-center space-x-2 text-gray-300 hover:text-karate-red transition-colors"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="text-2xl">{social.icon}</span>
                  <span className="hidden sm:block">{social.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-gray-400 text-sm border-t border-gray-800 pt-6"
          >
            <p>© 2025 Kyokushin Karate Honbu Dojo. All rights reserved. Built with fighting spirit and dedication.</p>
            <p className="mt-2 font-japanese">
              <span className="text-karate-red">🥋</span> 極真空手 - OSU! The Ultimate Truth <span className="text-karate-red">🥋</span>
            </p>
          </motion.div>
        </div>
      </footer>

      {/* Gallery Modal */}
      {showGalleryModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={() => setShowGalleryModal(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white rounded-2xl p-6 max-w-4xl w-full max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-karate-black font-kyokushin">
                🖼️ Photo Gallery
              </h2>
              <button
                onClick={() => setShowGalleryModal(false)}
                className="text-2xl text-gray-600 hover:text-karate-red transition-colors"
              >
                ✕
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((image) => (
                <motion.div
                  key={image.id}
                  className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl p-8 text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-6xl mb-4">{image.emoji}</div>
                  <h3 className="text-lg font-semibold text-karate-black">
                    {image.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-2">
                    {image.id === 3 ? "Country Director • 6th Dan Black Belt" : "Click to view full image"}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  )
}

export default Footer
