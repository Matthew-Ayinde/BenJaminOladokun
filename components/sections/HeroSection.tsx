"use client"
import { motion } from "framer-motion"
import { ArrowRight, ExternalLink, Globe, Mail, ChevronDown } from "lucide-react"
import Image from "next/image"
import images from "@/public/images"
import { useState, useEffect } from "react"

const HeroSection = () => {
  const [typedText, setTypedText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [showCursor, setShowCursor] = useState(true)
  const fullText = "Africa,"

  useEffect(() => {
    const typingSpeed = isDeleting ? 75 : 120
    const pauseTime = 2500

    const timer = setTimeout(() => {
      if (!isDeleting && typedText === fullText) {
        setTimeout(() => setIsDeleting(true), pauseTime)
      } else if (isDeleting && typedText === "") {
        setIsDeleting(false)
      } else if (isDeleting) {
        setTypedText(fullText.substring(0, typedText.length - 1))
      } else {
        setTypedText(fullText.substring(0, typedText.length + 1))
      }
    }, typingSpeed)

    return () => clearTimeout(timer)
  }, [typedText, isDeleting, fullText])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 530)

    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen bg-black flex items-center overflow-hidden pt-32 lg:pt-20">
      <div className="w-full px-6 sm:px-10 py-20">
        <div className="max-w-[1600px] grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
          {/* Left Section - Content */}
          <div className="space-y-8 lg:space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-emerald-700 text-xs sm:text-sm font-light tracking-[0.3em] uppercase">
                Entrepreneur • Builder • Visionary
              </p>

              <h1 className="text-white font-light leading-[0.95] tracking-tight text-5xl sm:text-6xl lg:text-7xl xl:text-7xl">
                <span className="block">Innovating</span>
                <span className="block text-emerald-600 flex items-baseline">
                  <span>{typedText}</span>
                  <span
                    className={`inline-block w-[3px] h-[0.85em] bg-emerald-600 ml-[2px] transition-opacity duration-100 ${showCursor ? 'opacity-100' : 'opacity-0'}`}
                    style={{ transform: 'translateY(0.1em)' }}
                  ></span>
                </span>
                <span className="block">Shaping the</span>
                <span className="block">Future.</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl lg:text-2xl text-white/70 font-light leading-relaxed max-w-2xl"
            >
              Visionary entrepreneur, strategist, and builder passionate about reshaping industries and empowering
              people across Africa and emerging markets.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 pt-3"
            >
              <button
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                className="group flex items-center justify-center space-x-3 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white px-16 py-5 mx-4 my-6 font-medium tracking-wide uppercase hover:from-emerald-500 hover:to-emerald-400 transition-all duration-300 min-w-[250px] rounded-full shadow-lg shadow-emerald-600/30 hover:shadow-xl hover:shadow-emerald-600/40"
              >
                <span>Explore Journey</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => document.getElementById("speaking")?.scrollIntoView({ behavior: "smooth" })}
                className="group flex items-center justify-center space-x-3 border-2 border-emerald-600/50 text-white px-10 py-1 font-medium tracking-wide uppercase hover:bg-emerald-600/10 hover:border-emerald-600 transition-all duration-300 rounded-full"
              >
                <span>Speaking</span>
                <ExternalLink className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </button>
            </motion.div>



            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex items-center space-x-5 pt-6"
            >
              <span className="text-white/50 text-xs sm:text-sm font-light tracking-wide uppercase">Connect</span>
              <div className="flex space-x-4">
                {[
                  { icon: Globe, label: "LinkedIn", href: "#" },
                  { icon: Globe, label: "Twitter", href: "#" },
                  { icon: Mail, label: "Email", href: "#" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 border border-white/20 flex items-center justify-center rounded-full hover:border-emerald-600 hover:text-emerald-600 hover:bg-emerald-600/10 transition-all duration-300 group"
                  >
                    <social.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Section - Image & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden lg:flex flex-col space-y-8"
          >
            {/* Portrait Image */}
            <div className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden border border-emerald-600/20 shadow-2xl shadow-emerald-600/10">
              <Image
                src={images.portrait || "/placeholder.svg"}
                alt="Benjamen Oladokun"
                fill
                className="object-cover object-center hover:scale-105 transition-transform duration-700"
                priority
                quality={95}
              />
              {/* Subtle gradient overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>


          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="flex flex-col items-center space-y-2 text-white/40"
        >
          <span className="text-[10px] sm:text-xs font-light tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroSection
