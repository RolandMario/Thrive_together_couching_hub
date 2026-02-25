'use client'
import React, { useState, useEffect } from 'react';
import { Menu, X, Heart, Users, BookOpen, Star, Mail, Phone, Calendar, ArrowRight, CheckCircle, Download } from 'lucide-react';
import Link from 'next/link';
import Footer from './components/footer';
import Navigation from './components/navigation';
import Image from 'next/image';
import PremiumBook from './components/premiumBook';


const statusMessages = {
  idle: 'Get My Free Ebook',
  loading: 'Sending...',
  success: 'Check your Inbox! ✅',
  error: 'Something went wrong. Try again?'
};

const LeadMagnet = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleSubmit = async(e:any) => {
  e.preventDefault();
  setStatus('loading');

  try {
    const response = await fetch('/api/send-ebook', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });

    if (response.ok) {
      setStatus('success');
      setEmail('');
    } else {
      setStatus('error');
    }
  } catch (error) {
    console.error("Submission failed:", error);
    setStatus('error');
  }
  };

  return (
    <div className="bg-orange-50 border-l-4 border-orange-400 p-8 rounded-r-xl shadow-sm my-12">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Download className="w-3 h-3" /> Free Resource
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Download: "The Peer Pressure Vaccine"</h3>
          <p className="text-gray-600 mb-4">
            Unlock the 5 quick and practical steps to help your teenager beat peer pressure, build confidence and develop a healthy self-worth.
          </p>
          <Image
          src={"/assets/book_cover.jpeg"}
          alt='book cover'
          width={300}
          height={200}
          
          
          />
        </div>
        <div className="w-full md:w-auto">
          {status === 'success' ? (
            <div className="bg-green-100 text-green-800 p-4 rounded-lg flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Check your inbox! The eBook is on its way.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 min-w-[300px]">
              <input
                type="email"
                required
                placeholder="Enter your best email"
                className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition shadow-md w-full"
              >
                {/* {status === 'loading' ? 'Sending...' : 'Get My Free Ebook'} */}
                {statusMessages[status as keyof typeof statusMessages]}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

/**
 * PAGE: Home
 */
const HomePage = () => (
  <div className="animate-fade-in">
    {/* Hero Section */}
    <header className="relative  bg-blue-400 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Helping Nigerian Teens <span className="text-teal-600">Thrive.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-lg">
              We are raising teenagers who know who they are, what they stand for, and how to show up with confidence and values in a noisy world.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href={'/services'} className="px-8 py-4 bg-teal-600 text-white rounded-full font-semibold hover:bg-teal-700 transition shadow-lg">
                Explore Programs
              </Link>
              <Link href={'/about'} className="px-8 py-4 bg-white text-teal-700 border border-teal-200 rounded-full font-semibold hover:bg-teal-50 transition">
                Meet Nikky
              </Link>
            </div>
          </div>
          <div className="relative">
            {/* Abstract Background blob */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-50"></div>
            <img 
              src="/assets/Hero.png" 
              alt="Happy friends teenage group" 
              className="relative rounded-3xl shadow-2xl object-cover h-[500px] w-full z-10"
            />
          </div>
        </div>
      </div>
    </header>

    {/* Slogan Banner */}
    <div className="bg-slate-900 text-white py-12 text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-serif italic tracking-wide">"Elevating Teens, Supporting Parents."</h2>
      </div>
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      
      {/* Intro Section */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          We are a youth-focused coaching and family empowerment space committed to helping <span className="font-semibold text-teal-600">Nigerian Teenagers</span> develop a healthy identity, build emotional strength, reduce distractions, and grow up with confidence and values, while supporting parents, teachers, and caregivers who guide them.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed mb-10">
          We believe that when teens are understood, supported, and empowered, they rise, and when they rise, families and communities rise too.
        </p>
         <Link href={'https://chat.whatsapp.com/It1FnFzWT2rC7Z42htmWqE?mode=gi_t'} className=" mt-10 px-8 py-4 bg-teal-600 text-white rounded-full font-semibold hover:bg-teal-700 transition shadow-lg">
                Join Our Community
          </Link>
      </div>

      {/* Vision & Mission Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-teal-50 p-8 rounded-2xl border border-teal-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center text-white">
              <Star className="w-5 h-5" />
            </div>
            <h3 className="text-2xl font-bold text-teal-900">Our Vision</h3>
          </div>
          <p className="text-teal-800 text-lg">
            A world where every adolescent is confident, seen, heard and understood.
          </p>
        </div>

        <div className="bg-orange-50 p-8 rounded-2xl border border-orange-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center text-white">
              <Heart className="w-5 h-5" />
            </div>
            <h3 className="text-2xl font-bold text-orange-900">Our Mission</h3>
          </div>
          <p className="text-orange-800 text-lg">
            To create safe spaces for teens (especially girls) to confidently step into their identity and thrive holistically, while maintaining strong loving bonds with their parents.
          </p>
        </div>
      </div>

      {/* Who We Serve Section */}
      <div className="mb-16 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Who We Serve</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <span className="px-6 py-3 bg-white border border-gray-200 rounded-full shadow-sm text-gray-700 font-medium">Adolescents (Ages 10-19)</span>
          <span className="px-6 py-3 bg-white border border-gray-200 rounded-full shadow-sm text-gray-700 font-medium">Parents of Teens</span>
          <span className="px-6 py-3 bg-white border border-gray-200 rounded-full shadow-sm text-gray-700 font-medium">Teachers and Youth Mentors</span>
        </div>
      </div>

      {/* Services Preview Grid */}
      <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">What We do</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        
        {[
          { icon: Users, title: "Teen Coaching", desc: "Mentorship to help teens navigate identity confusion, negative peer pressure, and external distractions." },
          { icon: Heart, title: "Parent Guidance", desc: "Bridging the gap, so you can connect deeply with your child in this noisy digital world." },
          { icon: BookOpen, title: "Assessments", desc: "Psychometric tools to uncover strengths and personality styles." },
          { icon: Star, title: "Confidence Programs", desc: "Confidence & Identity Building Programmes: Building identity, confidence and resilience in girls." },
          { icon: Users, title: "Training", desc: "Equipping teachers and youth workers with behavioral insights." },
          { icon: CheckCircle, title: "Leadership", desc: "Fostering the next generation of emotionally intelligent leaders." }
        ].map((item, idx) => (
          <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-xl flex items-center justify-center mb-6">
              <item.icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}


      </div>

      <LeadMagnet />

      {/* Founder Teaser */}
      <div className="bg-slate-50 rounded-3xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-12 flex flex-col justify-center">
            <span className="text-teal-600 font-bold uppercase tracking-wider text-sm mb-2">The Founder</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Meet Nikky Nkeiruka Nzekwe</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              With over 12 years of hands-on experience, Nikky is widely known for her warm approach, deep empathy, and ability to create transformation in both teens and parents.
            </p>
            <Link href={'/about'} className="flex items-center text-teal-700 font-semibold hover:gap-4 gap-2 transition-all mb-10">
              Read Full Bio <ArrowRight className="w-5 h-5" />
            </Link>
                     <div className="flex justify-center  w-full ">
            <Link 
              href="https://chat.whatsapp.com/It1FnFzWT2rC7Z42htmWqE?mode=gi_t" 
              className="mt-10 px-8 py-4 bg-teal-600 text-white rounded-full font-semibold hover:bg-teal-700 transition shadow-lg inline-block"
            >
              Join Our Parents Community
            </Link>
          </div>
          </div>
          <div className="h-64 md:h-auto bg-gray-200">
             <img 
              src="/assets/author.jpeg" 
              alt="Nikky Nkeiruka Nzekwe" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <PremiumBook/>
    </div>
  </div>
);




/**
 * MAIN APP COMPONENT
 */
const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);



  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 flex flex-col">
      <Navigation />
      <main className="flex-grow">
        
        <HomePage/>
      </main>
      <Footer  />
    </div>
  );
};

export default App;