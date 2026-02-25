'use client'
import React, { useState } from 'react';
import { Clock, Calendar, CheckCircle, ChevronLeft, ChevronRight, CreditCard } from 'lucide-react';
import Footer from '../components/footer';
import Navigation from '../components/navigation';

/**
 * TYPES & INTERFACES
 */
interface Service {
  id: number;
  title: string;
  duration: string;
  price: string;
  description: string;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  notes: string;
}

type BookingStatus = 'Confirm Booking' | 'processing' | 'confirmed'|'error';

/**
 * PAGE: Book Session
 */
const BookSessionPage = () => {
  // 1. State Hooks with TypeScript Generics
  const [step, setStep] = useState<number>(1);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>({ 
    name: '', 
    email: '', 
    phone: '', 
    notes: '' 
  });
  const [bookingStatus, setBookingStatus] = useState<BookingStatus>('Confirm Booking');

  const services: Service[] = [
    { id: 1, title: 'Discovery Call', duration: '15 mins', price: 'Free', description: 'A quick chat to see if we are a good fit.' },
    { id: 2, title: 'Teen Coaching Session', duration: '60 mins', price: '₦25,000 per session', description: '1:1 personalized coaching for your teenager.' },
    { id: 3, title: 'Parent Consultation', duration: '60 mins', price: '₦30,000 per session', description: 'Guidance and strategies for parents.' },
    { id: 4, title: 'Psychometric Assessment', duration: '90 mins', price: '₦45,000 per session', description: 'In-depth psychometric assessments for 1 teen and parents, with report and debrief session.' },
  ];

  // Helper to generate dates
  // const getDates = (): Date[] => {
  //   const dates = [];
  //   for (let i = 1; i <= 4; i++) {
  //     const d = new Date();
  //     d.setDate(d.getDate() + i);
  //     dates.push(d);
  //   }
  //   return dates;
  // };

  const getDates = (): Date[] => {
  const dates: Date[] = [];
  let daysAdded = 0;
  let iterator = 1;

  while (daysAdded < 6) {
    const d = new Date();
    d.setDate(d.getDate() + iterator);

    // .getDay() returns 0 for Sunday
    if (d.getDay() !== 0) {
      dates.push(d);
      daysAdded++;
    }

    iterator++;
  }

  return dates;
};

  const dates = getDates();
  const times = ['10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM'];

  /**
   * NAVIGATION HANDLERS
   */
  const handleNext = () => {
    if (step === 1 && selectedService) setStep(2);
    else if (step === 2 && selectedDate && selectedTime) setStep(3);
    else if (step === 3 && formData.name && formData.email) setStep(4);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleConfirm = async() => {
   
    setBookingStatus('processing');
    const combinedData = { ...formData, selectedService, selectedDate, selectedTime };
    console.log('combined data: ', combinedData)
        const submitWithRetry = async (retries = 5, delay = 1000) => {
      const scriptURL = 'https://script.google.com/macros/s/AKfycbwCjhywYm4aLfqyQVxmVj-kUUvAbygQYp5v69LXUPr0eAIOQr_kyxPY5etOFEycPSjE1w/exec';
      
      try {
        const response = await fetch(scriptURL, {
          method: 'POST',
          mode: 'no-cors', // Essential for Google Apps Script redirects
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...combinedData,
            timestamp: new Date().toISOString(),
            // totalPrice: SUITES.find(s => s.id === bookingData.suite)?.price
          }),
        });
        
        // With no-cors, we won't see response status, but success is implied if no exception is thrown
        setBookingStatus('confirmed');
        // setStep(3);
      } catch (error) {
        if (retries > 0) {
          await new Promise(resolve => setTimeout(resolve, delay));
          return submitWithRetry(retries - 1, delay * 2);
        }
        throw error;
      }
    };

    try {
      await submitWithRetry();
    } catch (error) {
      console.error('Submission Error:', error);
      setBookingStatus('error');
    }
    handleNext()
  };

  return (
    <>
    <Navigation/>
    <div className="animate-fade-in max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-900">Book a Session</h1>
        <p className="text-gray-600 mt-2">Take the first step towards a thriving family.</p>
      </div>

      {/* Progress Bar */}
      <div className="flex justify-between items-center mb-10 max-w-xl mx-auto relative">
        <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 -z-10 rounded-full"></div>
        <div 
          className="absolute top-1/2 left-0 h-1 bg-teal-600 -z-10 rounded-full transition-all duration-300" 
          style={{ width: `${((step - 1) / 3) * 100}%` }}
        ></div>
        {[1, 2, 3, 4].map((num) => (
          <div 
            key={num} 
            className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${step >= num ? 'bg-teal-600 text-white' : 'bg-gray-200 text-gray-500'}`}
          >
            {step > num ? <CheckCircle className="w-5 h-5" /> : num}
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
        
        {/* Step 1: Select Service */}
        {step === 1 && (
          <div className="p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Select a Service</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {services.map((service) => (
                <div 
                  key={service.id}
                  onClick={() => setSelectedService(service)}
                  className={`p-6 rounded-xl border-2 cursor-pointer transition-all hover:shadow-md ${selectedService?.id === service.id ? 'border-teal-600 bg-teal-50' : 'border-gray-100 hover:border-teal-300'}`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-gray-900">{service.title}</h3>
                    <span className="bg-white px-2 py-1 rounded text-xs font-bold text-gray-600 border border-gray-200">{service.price}</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{service.description}</p>
                  <div className="flex items-center text-xs text-gray-500 gap-1">
                    <Clock className="w-3 h-3" /> {service.duration}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Date & Time */}
        {step === 2 && (
          <div className="p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Choose Date & Time</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-gray-700 mb-4 flex items-center gap-2"><Calendar className="w-4 h-4"/> Select Date</h3>
                <div className="grid grid-cols-1 gap-2">
                  {dates.map((date, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedDate(date)}
                      className={`p-3 rounded-lg text-left border transition-all ${selectedDate?.toDateString() === date.toDateString() ? 'bg-teal-600 text-white border-teal-600' : 'bg-white border-gray-200 hover:bg-gray-50'}`}
                    >
                      {date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                 <h3 className="font-semibold text-gray-700 mb-4 flex items-center gap-2"><Clock className="w-4 h-4"/> Select Time</h3>
                 <div className="grid grid-cols-2 gap-3">
                   {times.map((time, idx) => (
                     <button
                       key={idx}
                       onClick={() => setSelectedTime(time)}
                       disabled={!selectedDate}
                       className={`p-3 rounded-lg border text-center transition-all ${selectedTime === time ? 'bg-orange-500 text-white border-orange-500' : 'bg-white border-gray-200 hover:bg-gray-50'} ${!selectedDate && 'opacity-50 cursor-not-allowed'}`}
                     >
                       {time}
                     </button>
                   ))}
                 </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Details */}
        {step === 3 && (
          <div className="p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Your Details</h2>
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Any specific topics you'd like to discuss?</label>
                <textarea 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"
                  value={formData.notes}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                ></textarea>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg mt-6 flex items-start gap-3">
              <CreditCard className="w-5 h-5 text-gray-500 mt-0.5" />
              <p className="text-xs text-gray-500">
                Payment is required to confirm booking for paid sessions. You will receive payment instructions via email after confirmation.
              </p>
            </div>
          </div>
        )}

        {/* Step 4: Confirmation */}
        {step === 4 && (
          <div className="p-12 text-center">
            {bookingStatus === 'processing' ? (
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 border-4 border-teal-200 border-t-teal-600 rounded-full animate-spin mb-4"></div>
                <p className="text-gray-600">Processing your booking...</p>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Booking Confirmed!</h2>
                <div className="text-gray-600 mb-6 max-w-md">
                  Thank you, <strong>{formData.name}</strong>. A follow up communication will be sent to as soon as possible <strong>{formData.email}</strong> with details for your <strong>{selectedService?.title}</strong> on <strong>{selectedDate?.toLocaleDateString()} at {selectedTime}</strong>.
                </div>
                <button 
                  onClick={() => window.location.reload()} 
                  className="px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition"
                >
                  Back to Home
                </button>
              </div>
            )}
          </div>
        )}

        {/* Footer Navigation */}
        {step < 4 && (
          <div className="px-8 py-6 bg-gray-50 border-t border-gray-100 flex justify-between">
            <button 
              onClick={handleBack}
              disabled={step === 1}
              className={`flex items-center gap-2 px-6 py-2 rounded-lg font-medium transition ${step === 1 ? 'opacity-0 pointer-events-none' : 'text-gray-600 hover:bg-gray-200'}`}
            >
              <ChevronLeft className="w-4 h-4" /> Back
            </button>
            {step === 3 ? (
              <button 
                onClick={handleConfirm}
                disabled={!formData.name || !formData.email}
                className="flex items-center gap-2 px-8 py-2 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 transition shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {`${bookingStatus}`} <CheckCircle className="w-4 h-4" />
              </button>
            ) : (
              <button 
                onClick={handleNext}
                disabled={(step === 1 && !selectedService) || (step === 2 && (!selectedDate || !selectedTime))}
                className="flex items-center gap-2 px-8 py-2 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next Step <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        )}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default BookSessionPage;