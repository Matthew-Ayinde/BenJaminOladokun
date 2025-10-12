"use client"
import { motion } from "framer-motion"
import { Mail, Linkedin, Twitter, Send, MapPin, Phone } from "lucide-react"
import { useState } from "react"

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "#",
      color: "hover:text-blue-400 hover:border-blue-400",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "#",
      color: "hover:text-sky-400 hover:border-sky-400",
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:",
      color: "hover:text-emerald-400 hover:border-emerald-400",
    },
  ]

  return (
    <section id="contact" className="py-32 bg-gradient-to-b from-black via-zinc-950 to-zinc-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-600 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-400 rounded-full blur-[150px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-8 lg:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="text-emerald-600 text-sm font-light tracking-[0.3em] uppercase mb-6">
            Get In Touch
          </div>
          <h2 className="text-4xl lg:text-6xl font-light text-white mb-8">
            Let's Build
            <span className="block text-emerald-600">Something Great</span>
          </h2>
          <p className="text-xl text-white/80 font-light max-w-3xl mx-auto leading-relaxed">
            Whether you're looking for a speaker, advisor, or partner in your next venture,
            I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-light text-white mb-6">Connect With Me</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4 text-white/70">
                  <MapPin className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-light">Lagos, Nigeria</p>
                    <p className="text-sm text-white/50">Available globally</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 text-white/70">
                  <Mail className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-light">hello@benjamenoladokun.com</p>
                    <p className="text-sm text-white/50">Response within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 text-white/70">
                  <Phone className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-light">Available for consultations</p>
                    <p className="text-sm text-white/50">Book a call</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-6 pt-8 border-t border-white/10">
              <h4 className="text-lg font-light text-white">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className={`w-12 h-12 border-2 border-white/20 rounded-full flex items-center justify-center transition-all duration-300 group ${social.color}`}
                  >
                    <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quote */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-600/10 to-transparent border border-emerald-600/20">
              <p className="text-white/80 font-light italic leading-relaxed">
                "I'm always excited to connect with fellow entrepreneurs, innovators, and those
                passionate about building impactful ventures."
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-white/80 text-sm font-light tracking-wide">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-emerald-600 focus:bg-white/10 transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-white/80 text-sm font-light tracking-wide">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-emerald-600 focus:bg-white/10 transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-white/80 text-sm font-light tracking-wide">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-emerald-600 focus:bg-white/10 transition-all duration-300"
                  placeholder="Speaking Engagement / Partnership / Consultation"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-white/80 text-sm font-light tracking-wide">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-emerald-600 focus:bg-white/10 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project or inquiry..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group w-full sm:w-auto flex items-center justify-center space-x-3 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white px-12 py-4 font-medium tracking-wide uppercase hover:from-emerald-500 hover:to-emerald-400 transition-all duration-300 rounded-full shadow-lg shadow-emerald-600/30 hover:shadow-xl hover:shadow-emerald-600/40"
              >
                <span>Send Message</span>
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection

