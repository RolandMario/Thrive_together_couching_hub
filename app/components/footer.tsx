'use client'

import {  Mail, Phone, Calendar} from 'lucide-react';
import Link from 'next/link';
const Footer = ()=>{
return(
    <>
          <footer className="bg-slate-900 text-slate-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-white text-lg font-bold mb-4">Thrive Together Coaching Hub</h3>
                  <p className="text-sm leading-relaxed mb-4">
                    Raising teenagers who know who they are, what they stand for, and how to show up with confidence and values in a noisy world.
                  </p>
                  <div className="text-teal-400 font-semibold italic">
                    "Elevating Teens, Supporting Parents."
                  </div>
                </div>
                
                <div>
                  <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
                  <ul className="space-y-2">
                    <li><Link href={'/home'} className="hover:text-teal-400 transition">Home</Link></li>
                    <li><Link href={'/about'} className="hover:text-teal-400 transition">About Nikky</Link></li>
                    <li><Link href={'/services'} className="hover:text-teal-400 transition">Services</Link></li>
                    <li><Link href={'/contact'} className="hover:text-teal-400 transition">Contact Us</Link></li>
                  </ul>
                </div>
        
                <div>
                  <h3 className="text-white text-lg font-bold mb-4">Get In Touch</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-teal-400" /> thrivetogetherhubb@gmail.com</li>
                    <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-teal-400" /> +234 803 747 6431</li>
                    <li className="flex items-center gap-2"><Calendar className="w-4 h-4 text-teal-400" /> Mon - Fri: 9:00 AM - 6:00 PM</li>
                  </ul>
                </div>
              </div>
              <div className="border-t border-slate-700 mt-12 pt-8 text-center text-xs">
                <p>&copy; {new Date().getFullYear()} Thrive Together Coaching Hub. All rights reserved.</p>
              </div>
            </div>
          </footer>
    </>
)
}
export default Footer;