'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import images from '@/public/images';

const JourneySection = () => {
  const journeySteps = [
    {
      year: "Early Beginnings",
      title: "Gitex Global",
      description: "Speaker on Africa's Role in Shaping the Future of Innovation. Featured at one of the world's largest technology conferences in Dubai, sharing insights on emerging market transformation and digital innovation across the continent.",
      image: images.conference1
    },
    {
      year: "Innovation Era",
      title: "Digital Technology Showcase with Anthony Blinken",
      description: "Covered AI & Innovation in the Nigerian Mobility Sector at this prestigious showcase. Demonstrated how technology is reshaping Africa's mobility ecosystem and the impact of fintech on auto dealerships.",
      image: images.conference2
    },
    {
      year: "Thought Leadership",
      title: "Art Of Technology",
      description: "Speaker on The Digital Wave: Powering Creative Innovation in Africa. Shared insights on how technology and entrepreneurship are converging to create groundbreaking solutions across African markets.",
      image: images.conference3
    },
    // {
    //   year: "Collaboration",
    //   title: "Founders Huddle 3.0",
    //   description: "Panelist at Founders Huddle 3.0 on Focus, Vision & Saying No. Sharing practical wisdom on entrepreneurial clarity, strategic decision-making, and the power of saying no to distractions.",
    //   image: images.conference6
    // },
    {
      year: "Community Impact",
      title: "GIBC Forward",
      description: "Host at The Impact Conference on Build the Change You Want to See. As Community Leader of GIBC, equipping faith-driven entrepreneurs with clarity, networks, and tools to build businesses that matter.",
      image: images.conference5
    },
    {
      year: "Global Platforms",
      title: "Founders Huddle 3.0",
      description: "Panelist on Focus, Vision & Saying No. Sharing practical wisdom on entrepreneurial clarity, strategic decision-making, and the power of saying no to distractions that derail vision and purpose.",
      image: images.conference6
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
