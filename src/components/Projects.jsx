import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { FaReact, FaNodeJs, FaGithub } from 'react-icons/fa'
import { SiTailwindcss, SiExpress, SiVercel, SiHtml5, SiCss3, SiJavascript } from 'react-icons/si'

const Projects = () => {
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

  const projects = [
    {
      id: 1,
      title: 'Car Rental Management System',
      description: 'A comprehensive car rental management system with user authentication, booking management, and admin dashboard. Built with modern web technologies for seamless user experience.',
      link: 'https://your-car-rental-project-link.com', // Replace with your actual project link
      skills: [
        { name: 'React', icon: FaReact, color: 'text-blue-500' },
        { name: 'TailwindCSS', icon: SiTailwindcss, color: 'text-cyan-500' },
        { name: 'NodeJs', icon: FaNodeJs, color: 'text-green-600' },
        { name: 'ExpressJs', icon: SiExpress, color: 'text-gray-800' },
        { name: 'Vercel', icon: SiVercel, color: 'text-black' },
      ],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      id: 2,
      title: 'Food Ordering System',
      description: 'An intuitive food ordering platform with menu browsing, cart management, and order tracking. Responsive design ensures great experience across all devices.',
      link: 'https://your-food-ordering-project-link.com', // Replace with your actual project link
      skills: [
        { name: 'HTML', icon: SiHtml5, color: 'text-orange-500' },
        { name: 'CSS', icon: SiCss3, color: 'text-blue-500' },
        { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-500' },
      ],
      gradient: 'from-orange-500 to-red-500',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id="projects" ref={sectionRef} className="section-container bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            My Projects
          </h2>
          <p className="text-gray-600 text-lg">Showcasing my recent work and achievements</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ scale: 1.03, y: -10 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow duration-300"
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{project.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {project.skills.map((skill, index) => {
                      const Icon = skill.icon
                      return (
                        <motion.div
                          key={index}
                          whileHover={{ scale: 1.1 }}
                          className="flex items-center space-x-2 bg-gray-50 px-4 py-2 rounded-lg border border-gray-200"
                        >
                          <Icon className={`${skill.color} text-xl`} />
                          <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                        </motion.div>
                      )
                    })}
                  </div>
                </div>

                <motion.a
                  href={"https://car-rental-one-coral.vercel.app"}
                  target="https://car-rental-one-coral.vercel.app"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`block w-full py-3 rounded-lg font-semibold text-white bg-gradient-to-r ${project.gradient} shadow-lg hover:shadow-xl transition-all text-center`}
                >
                  View Project
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects


