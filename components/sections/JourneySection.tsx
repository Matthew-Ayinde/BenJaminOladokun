'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import images from '@/public/images';

const JourneySection = () => {
  const journeySteps = [
    {
      year: "Early Years",
      title: "University Foundations",
      description: "Sparked entrepreneurial journey at Obafemi Awolowo University with ventures in gaming, hospitality, and mobility, including CampusChow and Snack It Distro.",
      image: images.conference1
    },
    {
      year: "2010s",
      title: "Digital Innovation",
      description: "Co-founded Eazypapers Technologies, Nigeria's first digital fleet documentation platform. Led automation of MMIA Tollgates at Venture Garden Group.",
      image: images.conference2
    },
    {
      year: "Present",
      title: "Shekel Mobility",
      description: "Co-founder of Y Combinator-backed fintech startup revolutionizing auto dealerships. Facilitated over $100M in transactions across four continents.",
      image: images.conference3
    },
    {
      year: "Impact",
      title: "Global Leadership",
      description: "Community Leader of GIBC, Forbes Business Council Member, Harambean Fellow, and Global Entrepreneurship Award recipient.",
      image: images.conference4
    }
  ];

  return (
    <section id="journey" className="py-32 bg-gradient-to-b from-zinc-900 via-black to-zinc-900">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="text-emerald-600 text-sm font-light tracking-[0.3em] uppercase mb-6">
            The Journey
          </div>
          <h2 className="text-4xl lg:text-6xl font-light text-white mb-8">
            A Legacy in
            <span className="block text-emerald-600">the Making</span>
          </h2>
          <p className="text-xl text-white/80 font-light max-w-3xl mx-auto leading-relaxed">
            From university ventures to building Africa's first mobility unicorn, 
            every step has been driven by purpose, innovation, and impact.
          </p>
        </motion.div>

        <div className="space-y-24">
          {journeySteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-16 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="space-y-4">
                  <div className="text-emerald-600 text-sm font-light tracking-[0.3em] uppercase">
                    {step.year}
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-light text-white">
                    {step.title}
                  </h3>
                </div>

                <p className="text-lg text-white/80 font-light leading-relaxed">
                  {step.description}
                </p>

                <div className="w-16 h-px bg-emerald-600"></div>
              </div>

              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="relative h-80 lg:h-96 w-full overflow-hidden rounded-3xl shadow-2xl shadow-emerald-600/10">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover hover:scale-105 transition-all duration-700"
                    // className="object-cover grayscale hover:grayscale-0 hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
