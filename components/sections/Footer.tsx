'use client';

import React from 'react';
import { Globe, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-zinc-900 border-t border-emerald-600/20 py-20">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="grid lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-2xl font-light text-white tracking-wider mb-4">
                BENJAMEN OLADOKUN
              </h3>
              <p className="text-white/60 font-light leading-relaxed max-w-md">
                Entrepreneur. Builder. Innovating Africa, Shaping the Future.
              </p>
            </div>
            
            <div className="flex space-x-6">
              {[
                { icon: Globe, label: 'LinkedIn', href: '#' },
                { icon: Globe, label: 'Twitter', href: '#' },
                { icon: Mail, label: 'Email', href: 'mailto:' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-12 h-12 border border-white/20 flex items-center justify-center rounded-full hover:border-emerald-600 hover:text-emerald-600 hover:bg-emerald-600/10 transition-all duration-300 group"
                >
                  <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-white font-light tracking-wide uppercase text-sm">Navigation</h4>
            <div className="space-y-3">
              {[
                { label: 'About', id: 'about' },
                { label: 'Journey', id: 'journey' },
                { label: 'Achievements', id: 'achievements' },
                { label: 'Speaking', id: 'speaking' },
              ].map((link) => (
                <button
                  key={link.label}
                  onClick={() => {
                    const element = document.getElementById(link.id);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="block text-white/60 hover:text-emerald-600 transition-colors duration-300 font-light"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-white font-light tracking-wide uppercase text-sm">Contact</h4>
            <div className="space-y-3 text-white/60 font-light">
              <p>Available for speaking engagements</p>
              <p>Business consultations</p>
              <p>Partnership opportunities</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
          <p className="text-white/40 font-light text-sm">
            © {new Date().getFullYear()} Benjamen Oladokun. All rights reserved.
          </p>
          <p className="text-white/40 font-light text-sm">
            Designed with purpose. Built for impact.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
