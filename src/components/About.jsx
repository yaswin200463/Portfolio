import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { FaCode, FaLaptopCode, FaRocket } from 'react-icons/fa'

const About = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="about" ref={sectionRef} className="section-container bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Photo and Info Section */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <div className="relative w-64 h-64 mx-auto md:mx-0">
                <img
                  src="/src/components/22102A040117 (1).JPG"
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full border-4 border-white shadow-2xl"
                />
              </div>
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              className="text-center md:text-left"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Keerthipati Sai Yaswin
              </h1>
              <p className="text-xl text-gray-600 mb-4">Full Stack Developer</p>
              <p className="text-gray-700 leading-relaxed">
                Passionate developer with expertise in building modern web applications.
                I love creating seamless user experiences and solving complex problems
                through clean, efficient code.
              </p>
            </motion.div>
          </motion.div>

          {/* Animated Features */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.div
              whileHover={{ scale: 1.05, x: 10 }}
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <FaCode className="text-blue-600 text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Clean Code</h3>
                  <p className="text-gray-600">Writing maintainable and scalable code</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, x: 10 }}
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <FaLaptopCode className="text-purple-600 text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Modern Tech</h3>
                  <p className="text-gray-600">Using latest technologies and frameworks</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, x: 10 }}
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-green-100 rounded-lg">
                  <FaRocket className="text-green-600 text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Fast Delivery</h3>
                  <p className="text-gray-600">Efficient development and deployment</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About


