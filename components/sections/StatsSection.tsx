"use client"
import { motion } from "framer-motion"

const StatsSection = () => {
  const stats = [
    { number: "15+", label: "Years of Experience", description: "Building ventures" },
    { number: "$100M+", label: "Transactions", description: "Via Shekel Mobility" },
    { number: "1000+", label: "Entrepreneurs", description: "Empowered globally" },
    { number: "4", label: "Continents", description: "Global impact" },
  ]

  return (
    <section className="py-20 bg-black border-y border-emerald-600/20">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center space-y-3"
            >
              <div className="text-5xl lg:text-6xl font-light text-emerald-600 mb-2">
                {stat.number}
              </div>
              <div className="text-white font-medium text-base lg:text-lg">
                {stat.label}
              </div>
              <div className="text-white/50 text-sm font-light">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default StatsSection

