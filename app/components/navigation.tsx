'use client'
import React, { useState, useEffect } from 'react';
import { Menu, X, Heart, Users, BookOpen, Star, Mail, Phone, Calendar, ArrowRight, CheckCircle, Download } from 'lucide-react';
import Link from 'next/link';
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', id: '/' },
    { name: 'About Me', id: '/about' },
    { name: 'Services', id: '/services' }, // Renamed "Book" to Services for clarity, contains booking info
    { name: 'Contact', id: '/contact' },
    { name: 'Free Guide', id: '/guide' },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <Link className="flex items-center cursor-pointer" href={'/'}>
            {/* Logo Representation */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center">
                {/* <Users className="text-white w-6 h-6" /> */}
                <img src={'/assets/logo2.png'} className="text-white w-full h-full rounded-sm"/>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-gray-900 leading-tight">Thrive Together</span>
                <span className="text-xs text-teal-600 font-medium tracking-wide">COACHING HUB</span>
              </div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={`${link.id}`}
                className={`text-sm font-medium transition-colors duration-200`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href={'/book'} 
              className="bg-teal-600 hover:bg-teal-700 text-white px-5 py-2.5 rounded-full font-medium text-sm transition-all shadow-lg hover:shadow-xl"
            >
              Book a Session
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={`${link.id}`}
                className={`block w-full text-left px-3 py-3 rounded-md text-base font-medium`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href={'/book-session'}
              className="w-full text-center mt-4 bg-teal-600 text-white px-4 py-3 rounded-lg font-medium"
            >
              Book a Session
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;