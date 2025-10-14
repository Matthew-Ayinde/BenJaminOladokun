"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "journey", label: "Journey" },
    { id: "achievements", label: "Achievements" },
    { id: "speaking", label: "Speaking" },
    { id: "contact", label: "Contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.id)
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false)
    // Small delay to allow menu close animation
    setTimeout(() => {
      const element = document.getElementById(sectionId)
      if (element) {
        const offset = 80 // Account for fixed nav height
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - offset

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        })
      }
    }, 300)
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 lg:px-16 right-0 z-50 bg-black/90 backdrop-blur-2xl border-b border-emerald-600/10 shadow-lg shadow-emerald-600/5"
      >
        <div className="">
          <div className="flex items-center justify-between w-full h-20 px-6">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-xl font-light tracking-wider text-white cursor-pointer"
              onClick={() => scrollToSection("hero")}
            >
              BENJAMEN OLADOKUN
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-x-10">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-light tracking-wide uppercase transition-colors duration-300 ${
                    activeSection === item.id ? "text-emerald-600" : "text-white/80 hover:text-emerald-600"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center text-white relative z-[60]"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop with gradient */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-gradient-to-br from-black via-black to-emerald-950/20"
            />

            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute top-1/4 -right-20 w-96 h-96 bg-emerald-600 rounded-full blur-[120px]"
              />
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.05 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                className="absolute bottom-1/4 -left-20 w-96 h-96 bg-emerald-400 rounded-full blur-[120px]"
              />
            </div>

            {/* Menu content */}
            <div className="relative h-full flex flex-col items-center justify-center px-8">
              {/* Decorative line */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                exit={{ scaleX: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="absolute top-32 left-8 right-8 h-px bg-gradient-to-r from-transparent via-emerald-600/50 to-transparent"
              />

              {/* Navigation items */}
              <nav className="flex flex-col items-center gap-4 w-full max-w-md">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.1 + index * 0.08,
                      ease: "easeOut",
                    }}
                    whileHover={{ scale: 1.05, x: 10 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => scrollToSection(item.id)}
                    className="group relative w-full text-center"
                  >
                    {/* Hover background effect */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      className="absolute inset-0 bg-emerald-600/10 rounded-lg origin-left"
                    />

                    {/* Text */}
                    <span
                      className={`relative block text-3xl md:text-4xl font-light tracking-wider uppercase transition-colors duration-300 py-4 ${
                        activeSection === item.id ? "text-emerald-600" : "text-white/90 group-hover:text-emerald-600"
                      }`}
                    >
                      {item.label}
                    </span>

                    {/* Active indicator */}
                    {activeSection === item.id && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-emerald-600 rounded-full"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}

                    {/* Number indicator */}
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 + index * 0.08 }}
                      className="absolute -right-8 top-1/2 -translate-y-1/2 text-xs text-emerald-600/50 font-mono"
                    >
                      0{index + 1}
                    </motion.span>
                  </motion.button>
                ))}
              </nav>

              {/* Decorative line */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                exit={{ scaleX: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="absolute bottom-32 left-8 right-8 h-px bg-gradient-to-r from-transparent via-emerald-600/50 to-transparent"
              />

              {/* Footer text */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="absolute bottom-12 text-white/40 text-sm tracking-widest uppercase"
              >
                Navigate
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navigation
