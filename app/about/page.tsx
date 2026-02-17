'use client'
import {  CheckCircle} from 'lucide-react';
import Link from 'next/link';
import Navigation from '../components/navigation';
import Footer from '../components/footer';


/**
 * PAGE: About
 */
const AboutPage = () => {
   return( 
   <>
   <Navigation/>
  <div className="animate-fade-in max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About The Founder</h1>
        <div className="w-24 h-1 bg-teal-500 mx-auto rounded-full"></div>
      </div>

      <div className="flex flex-col md:flex-row gap-12 items-start mb-16">
        <div className="w-full md:w-1/3 sticky top-24">
          <img 
            src="/assets/author.jpeg" 
            alt="Nikky Nkeiruka Nzekwe" 
            className="w-full rounded-2xl shadow-xl mb-6"
          />
          <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
             <h3 className="font-bold text-gray-900 mb-2">Expertise</h3>
             <ul className="text-sm space-y-2 text-gray-700">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-orange-500 mt-0.5"/> Teen Coaching</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-orange-500 mt-0.5"/> Psychometric Assessments</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-orange-500 mt-0.5"/> Emotional Intelligence</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-orange-500 mt-0.5"/> Parent Coaching</li>
             </ul>
          </div>
        </div>
        
        <div className="w-full md:w-2/3 space-y-6 text-lg text-gray-600 leading-relaxed">
          <h2 className="text-2xl font-bold text-gray-900">Nikky Nkeiruka Nzekwe</h2>
          <p className="font-medium text-teal-700">Certified Teen and Parent Coach | Psychometric Assessment Practitioner | Founder</p>
          
          <p>
            Nikky is the founder of Thrive Together Coaching Hub, a family-focused coaching brand dedicated to helping teens thrive and supporting parents. With over 12 years of hands-on experience working with teens through a non-governmental organization she founded, Nikky is passionate about helping young people build confidence, identity, emotional stability, and self-leadership.
          </p>
          <p>
            Her work is driven by her personal story as a young girl who faced silent pressures and emotional struggles while carrying big dreams. This gives her a unique ability to understand today’s teenagers deeply.
          </p>
          <p>
            Today, she is widely known for her warm approach, deep empathy, and ability to create transformation in both teens and parents. Her mission is clear and powerful: <strong>To elevate teens, support parents, and strengthen African families.</strong>
          </p>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Story</h2>
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
           <p className="text-lg text-gray-600 mb-6">
             Our work was born from a simple but powerful truth: <span className="font-semibold text-gray-900">Many bright and talented teens are struggling silently.</span>
           </p>
           <p className="text-lg text-gray-600 mb-6">
             Many parents are trying their best but feel confused or disconnected from their teenagers. This gap inspired Nikky to create a safe, supportive, and professional space where both sides can get help that truly works.
           </p>
           <div className="bg-teal-50 p-6 rounded-xl mt-8">
             <h3 className="font-bold text-teal-800 text-xl mb-2">Our Promise</h3>
             <p className="text-teal-700">We will help your teenager thrive and we will support you every step of the way.</p>
           </div>
        </div>
      </div>
    </div>
  </div>
  <Footer/>
  </>
)};
export default AboutPage;