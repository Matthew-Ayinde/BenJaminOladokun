'use client';

import React from 'react';
import { motion } from 'framer-motion';

const AchievementsSection = () => {
  const achievements = [
    {
      category: "Entrepreneurial Ventures",
      items: [
        "Co-founder of Shekel Mobility (Y Combinator-backed)",
        "Facilitated over $100 million in auto transactions",
        "Founded CampusChow and Snack It Distro",
        "Co-founded Eazypapers Technologies",
        "Head of Innovation at Venture Garden Group"
      ]
    },
    {
      category: "Recognition & Awards",
      items: [
        "Forbes Business Council Member",
        "Harambean Fellow",
        "Global Entrepreneurship Award Recipient",
        "Y Combinator Alumni",
        "Featured Speaker at Harvard Centre for African Studies"
      ]
    },
    {
      category: "Leadership & Impact",
      items: [
        "Community Leader of Global Impact Business Community (GIBC)",
        "Empowered 1000+ entrepreneurs across Africa",
        "Led automation of MMIA Tollgates project",
        "Built Africa's first mobility unicorn vision",
        "Devoted husband and father"
      ]
    }
  ];

  return (
    <section id="achievements" className="py-32 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="text-emerald-600 text-sm font-light tracking-[0.3em] uppercase mb-6">
            Key Milestones
          </div>
          <h2 className="text-4xl lg:text-6xl font-light text-white mb-8">
            Achievements &
            <span className="block text-emerald-600">Recognition</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {achievements.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <div className="w-16 h-px bg-emerald-600"></div>
                <h3 className="text-2xl font-light text-white">
                  {category.category}
                </h3>
              </div>
              
              <ul className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <motion.li
                    key={itemIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: (index * 0.2) + (itemIndex * 0.1) }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-white/80 font-light leading-relaxed">{item}</p>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
