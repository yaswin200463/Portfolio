import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { FaPhone, FaEnvelope, FaGithub } from 'react-icons/fa'

const Contact = () => {
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

  const contactInfo = [
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+91 8074682533',
      link: 'tel:+15551234567',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'saiyaswin2004@gmail.com',
      link: 'mailto:saiyaswin2004@gmail.com',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      value: 'https://github.com/yaswin200463',
      link: 'https://github.com/yaswin200463',
      color: 'from-gray-700 to-gray-900',
    },
  ]

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="contact" ref={sectionRef} className="section-container bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-300 text-lg">Let's connect and build something amazing together</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {contactInfo.map((contact, index) => {
            const Icon = contact.icon
            return (
              <motion.a
                key={index}
                href={contact.link}
                target={contact.link.startsWith('http') ? '_blank' : '_self'}
                rel={contact.link.startsWith('http') ? 'noopener noreferrer' : ''}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                whileTap={{ scale: 0.95 }}
                className="block"
              >
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 shadow-xl">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${contact.color} mb-4`}>
                    <Icon className="text-3xl text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{contact.label}</h3>
                  <p className="text-gray-300">{contact.value}</p>
                  <motion.div
                    className="mt-4 text-sm font-medium text-blue-300 flex items-center"
                    whileHover={{ x: 5 }}
                  >
                    Click to {contact.label === 'GitHub' ? 'visit' : 'contact'} →
                  </motion.div>
                </div>
              </motion.a>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400">© 2024 Yashwin. All rights reserved.</p>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact


