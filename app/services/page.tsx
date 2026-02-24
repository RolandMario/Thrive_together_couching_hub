
'use client'
import React, { useState, useEffect } from 'react';
import { Menu, X, Heart, Users, BookOpen, Star, Mail, Phone, Calendar, ArrowRight, CheckCircle, Download } from 'lucide-react';
import Link from 'next/link';
import Footer from '../components/footer';
import Navigation from '../components/navigation';


/**
 * PAGE: Services (Book)
 */
const ServicesPage = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  return(
    <>
    <Navigation/>
  <div className="animate-fade-in max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div className="text-center mb-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">How We Can Help</h1>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Professional support for teens, parents, teachers, and youth-focused institutions.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100">
        <div className="bg-teal-600 p-6 text-white">
          <h2 className="text-2xl font-bold">For Teens</h2>
        </div>
        <div className="p-8 space-y-4">
          <ul className="space-y-4">
            <li className="flex gap-3">
              <CheckCircle className="w-6 h-6 text-teal-500 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-gray-900">1:1 Coaching & Mentorship</h3>
                <p className="text-sm text-gray-600">Personalized sessions tackling Identity <b>Confusion</b> , <b>Negative</b> Peer Pressure, Digital Distractions.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <CheckCircle className="w-6 h-6 text-teal-500 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-gray-900">Confidence & Identity Programs</h3>
                <p className="text-sm text-gray-600">Specialized <strong>programs</strong> for girls to build self worth, <b>emotional intelligence</b>, and resilience.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <CheckCircle className="w-6 h-6 text-teal-500 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-gray-900">Psychometric Assessments</h3>
                <p className="text-sm text-gray-600"> Discover attachment styles, unique personality traits, and career inclinations.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100">
        <div className="bg-orange-500 p-6 text-white">
          <h2 className="text-2xl font-bold">For Parents & Educators</h2>
        </div>
        <div className="p-8 space-y-4">
           <ul className="space-y-4">
            <li className="flex gap-3">
              <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-gray-900">Parent Coaching & Guidance</h3>
                <p className="text-sm text-gray-600">Strategies to improve family communication and handle conflict.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-gray-900">Teacher Training</h3>
                <p className="text-sm text-gray-600">Workshops on behavioral insight and emotional intelligence in the classroom.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-gray-900">Family Assessments</h3>
                <p className="text-sm text-gray-600">Tools to understand family dynamics and bridge generational gaps.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    {/* Booking Section */}
    <div id="booking-form" className="bg-slate-50 rounded-3xl p-8 md:p-12 text-center max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Transform Your Family?</h2>
      <p className="text-gray-600 mb-8">
        Book a discovery call with Nikky to see how we can support your teen and your parenting journey.
      </p>
      
      {/* Simulation of a booking calendar embed */}
      <div className="bg-white p-6 rounded-xl border border-dashed border-gray-300 min-h-[300px] flex flex-col items-center justify-center text-gray-400">
        <Calendar className="w-12 h-12 mb-4 text-teal-600 opacity-50" />
        <p className="font-medium">Ready to book a session?</p>
        {/* <p className="text-sm">(e.g., Calendly Embed would go here)</p> */}
        <Link href={'/book'} className="mt-6 bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition">
          Book a Session
        </Link>
      </div>


    </div>
  </div>
  <Footer/>
  </>
)};


export default ServicesPage;