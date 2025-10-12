'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import images from '@/public/images';

const AboutSection = () => {
  return (
    <section id="about" className="py-32 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="text-emerald-600 text-sm font-light tracking-[0.3em] uppercase">
                About Benjamen
              </div>

              <h2 className="text-4xl lg:text-6xl font-light text-white leading-tight">
                Entrepreneur. Builder.
                <span className="block text-emerald-600">Innovating Africa,</span>
                <span className="block">Shaping the Future.</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8 text-white/80 text-lg font-light leading-relaxed"
            >
              <p>
                Benjamen Oladokun is a visionary entrepreneur, strategist, and builder passionate about 
                reshaping industries and empowering people. With nearly 15 years of experience founding 
                and scaling businesses across mobility, fintech, logistics, hospitality, and technology, 
                he has consistently transformed bold ideas into impactful ventures.
              </p>

              <p>
                He is the co-founder of Shekel Mobility, a Y Combinator-backed fintech startup 
                revolutionizing auto dealerships across Africa and emerging markets. Through Shekel, 
                Benjamen is helping thousands of auto entrepreneurs access credit, digital tools, 
                and growth opportunities — laying the foundation for Africa's first mobility unicorn.
              </p>

              <p>
                Beyond his entrepreneurial ventures, Benjamen serves as the Community Leader of the 
                Global Impact Business Community (GIBC), where he equips faith-driven entrepreneurs 
                with the tools, networks, and values to build businesses that matter.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-8"
            >
              {[
                { label: 'Forbes Business Council', description: 'Member' },
                { label: 'Harambean Fellow', description: 'Recognition' },
                { label: 'Global Entrepreneurship Award', description: 'Recipient' },
                { label: 'Y Combinator', description: 'Alumni' },
              ].map((achievement, index) => (
                <div key={achievement.label} className="space-y-2">
                  <div className="text-emerald-600 font-medium">{achievement.label}</div>
                  <div className="text-white/60 text-sm font-light">{achievement.description}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Image */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-[600px] w-full">
                <Image
                  src={images.portrait2}
                  alt="Benjamen Oladokun"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
              
              {/* Floating Quote */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="absolute -bottom-8 -left-8 bg-emerald-600 text-white p-8 max-w-sm"
              >
                <div className="text-lg font-medium leading-tight">
                  "At my core, I am driven by clarity, purpose, and legacy."
                </div>
                <div className="text-sm font-light mt-2 opacity-80">
                  — Benjamen Oladokun
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
