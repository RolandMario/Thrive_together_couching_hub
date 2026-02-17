'use client'
import React, { useState } from 'react';
import {  Mail, Phone} from 'lucide-react';
import Link from 'next/link';
import Footer from '../components/footer';
import Navigation from '../components/navigation';


const Contact = ()=>{
  

// ... inside your component
const [formData, setFormData] = useState({
  firstName: '',
  lastName: '',
  email: '',
  topic: 'Teen Coaching Inquiry',
  message: ''
});

const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setStatus('loading');

  try {
    const response = await fetch('/api/send-message', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus('success');
      setFormData({ firstName: '', lastName: '', email: '', topic: 'Teen Coaching Inquiry', message: '' });
    } else {
      setStatus('error');
    }
  } catch (err) {
    setStatus('error');
  }
};

    return(
        <>
        <Navigation/>
        <div className="animate-fade-in max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
      <div>
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Let's Connect</h1>
        <p className="text-lg text-gray-600 mb-8">
          Whether you have a question about our programs, want to book a speaking engagement, or just need to say hello, we'd love to hear from you.
        </p>

        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Mail className="w-6 h-6 text-teal-600" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Email Us</h3>
              <p className="text-gray-600">thrivetogetherhubb@gmail.com</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Phone className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Whatsapp</h3>
              <p className="text-gray-600">+234 803 747 6431</p>
              <p className="text-sm text-gray-500">Mon-Fri from 9am to 6pm</p>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-gray-50 p-6 rounded-xl">
          <h3 className="font-bold text-gray-900 mb-2">Office Hours</h3>
          <p className="text-gray-600">We are available for in-person and virtual sessions.</p>
        </div>
      </div>

      {/* <div className="bg-white shadow-xl rounded-2xl p-8 border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h2>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
              <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none" placeholder="Jane" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
              <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none" placeholder="Doe" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none" placeholder="jane@example.com" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Topic</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none">
              <option>Teen Coaching Inquiry</option>
              <option>Parent Coaching Inquiry</option>
              <option>Speaking Engagement</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none" placeholder="How can we help you?"></textarea>
          </div>
          <button type="button" className="w-full bg-teal-600 text-white font-bold py-3 rounded-lg hover:bg-teal-700 transition">
            Send Message
          </button>
        </form>
      </div> */}
        <form onSubmit={handleSubmit} className="space-y-6">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
      <input 
        name="firstName" 
        value={formData.firstName} 
        onChange={handleChange} 
        required 
        type="text" 
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none" 
        placeholder="Jane" 
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
      <input 
        name="lastName" 
        value={formData.lastName} 
        onChange={handleChange} 
        required 
        type="text" 
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none" 
        placeholder="Doe" 
      />
    </div>
  </div>

  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
    <input 
      name="email" 
      value={formData.email} 
      onChange={handleChange} 
      required 
      type="email" 
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none" 
      placeholder="jane@example.com" 
    />
  </div>

  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">Topic</label>
    <select 
      name="topic" 
      value={formData.topic} 
      onChange={handleChange} 
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"
    >
      <option>Teen Coaching Inquiry</option>
      <option>Parent Coaching Inquiry</option>
      <option>Speaking Engagement</option>
      <option>Other</option>
    </select>
  </div>

  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
    <textarea 
      name="message" 
      value={formData.message} 
      onChange={handleChange} 
      required 
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none" 
      placeholder="How can we help you?"
    ></textarea>
  </div>

  <button 
    type="submit" 
    disabled={status === 'loading'}
    className={`w-full font-bold py-3 rounded-lg transition text-white ${
      status === 'success' ? 'bg-green-600' : status === 'error' ? 'bg-red-600' : 'bg-teal-600 hover:bg-teal-700'
    }`}
  >
    {status === 'loading' ? 'Sending...' : 
     status === 'success' ? 'Message Sent! ✅' : 
     status === 'error' ? 'Try Again ❌' : 'Send Message'}
  </button>
</form>
    </div>
    
  </div>


  <Footer/>
</>
    )

}

export default Contact;