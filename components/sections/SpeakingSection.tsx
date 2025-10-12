'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import images from '@/public/images';

const SpeakingSection = () => {
  const speakingTopics = [
    "Entrepreneurship & Venture Building",
    "Innovation in Emerging Markets", 
    "Fintech & Mobility Transformation",
    "Leadership & Purpose",
    "Faith & Business",
    "Capital & Growth",
    "Community & Collaboration"
  ];

  const events = [
    {
      name: "Art of Technology 5.0",
      topic: "The Digital Wave: Powering Creative Innovation in Africa",
      image: images.conference1
    },
    {
      name: "Harvard Centre for African Studies",
      topic: "Innovation and Entrepreneurship in Africa",
      image: images.conference2
    },
    {
      name: "GITEX Global, Dubai",
      topic: "Africa's Role in Shaping the Future of Innovation",
      image: images.conference3
    },
    {
      name: "AfroTech Conference",
      topic: "Innovation, Connection & Black Excellence",
      image: images.conference4
    },
    {
      name: "Digital Technology Showcase",
      topic: "AI & Innovation in the Nigerian Mobility Sector",
      image: images.conference5
    },
    {
      name: "Global Impact Business Community",
      topic: "Build the Change you want to See",
      image: images.conference6
    }
  ];

  return (
    <section id="speaking" className="py-32 bg-gradient-to-b from-black via-zinc-950 to-black">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="text-emerald-600 text-sm font-light tracking-[0.3em] uppercase mb-6">
            Speaking & Thought Leadership
          </div>
          <h2 className="text-4xl lg:text-6xl font-light text-white mb-8">
            Sharing Insights,
            <span className="block text-emerald-600">Inspiring Change</span>
          </h2>
          <p className="text-xl text-white/80 font-light max-w-3xl mx-auto leading-relaxed">
            From global stages to intimate boardrooms, sharing insights on entrepreneurship, 
            innovation, and building businesses that matter.
          </p>
        </motion.div>

        {/* Speaking Topics */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl font-light text-white mb-8">Core Speaking Topics</h3>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {speakingTopics.map((topic, index) => (
              <motion.div
                key={topic}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group border border-white/10 p-6 rounded-xl hover:border-emerald-600/50 hover:bg-white/5 transition-all duration-300"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full group-hover:scale-125 transition-transform"></div>
                  <h4 className="text-white font-light group-hover:text-emerald-600 transition-colors">
                    {topic}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Notable Engagements */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl font-light text-white mb-8">Notable Speaking Engagements</h3>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <motion.div
                key={event.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative h-64 mb-6 overflow-hidden rounded-2xl shadow-xl shadow-emerald-600/10">
                  <Image
                    src={event.image}
                    alt={event.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                </div>
                
                <div className="space-y-3">
                  <h4 className="text-lg font-light text-white group-hover:text-emerald-600 transition-colors">
                    {event.name}
                  </h4>
                  <p className="text-white/60 font-light text-sm leading-relaxed">
                    {event.topic}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakingSection;
