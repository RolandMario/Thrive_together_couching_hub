
'use client'
import { Menu, X, Heart, Users, BookOpen, Star, Mail, Phone, Calendar, ArrowRight, CheckCircle, Download, Shield, MessageCircle, HelpCircle, Quote } from 'lucide-react';
import LeadMagnetForm from '../components/leadMagnetForm';
import Navigation from '../components/navigation';
import Footer from '../components/footer';

/**
 * PAGE: Lead Magnet (New Dedicated Page)
 */
const LeadMagnetPage = () => {
  return(
    <>
    <Navigation/>
  <div className="animate-fade-in bg-white">
    {/* Header / Hero */}
    <div className="bg-slate-900 text-white pt-16 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
       {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-600 rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-block bg-orange-500 text-white text-xs font-bold uppercase tracking-widest py-1 px-3 rounded mb-6">
          Free 5-Step System
        </div>
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
          The Peer Pressure Vaccine: <br className="hidden md:block"/>
          <span className="text-teal-400">5 Steps to Raising a Teen Who Can’t Be Broken by Peer Pressure or Social Media</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          A Free System That Takes Just 5 Minutes a Day to Build Unshakeable Confidence.
        </p>
      </div>
    </div>

    {/* Form Section Floating */}
    <div className="max-w-4xl mx-auto px-4 -mt-16 relative z-20 mb-16">
      <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10 border border-gray-100 flex flex-col md:flex-row gap-10 items-center">
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Dear Parent of Teens,</h3>
          <p className="text-gray-600 mb-4 italic">"My child cares more about what their friends think than what I say?"</p>
          <p className="text-gray-600">
            If you've ever worried about losing the battle for your teenager's future, you are not alone. Get the guide that has helped hundreds of Nigerian families.
          </p>
        </div>
        <div className="w-full md:w-96 bg-gray-50 p-6 rounded-xl border border-gray-200">
           <LeadMagnetForm btnText="GET INSTANT ACCESS" />
        </div>
      </div>
    </div>

    {/* Content Body */}
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
      
      {/* The Problem */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">The Hidden Truth About Peer Pressure in 2025</h2>
        <div className="prose prose-lg text-gray-600 mx-auto">
          <p>Most parents still think peer pressure is about friends convincing their teen to do bad things. That's old thinking.</p>
          <p className="mt-4">Today's peer pressure is far more sophisticated. It's happening 24/7 through:</p>
          <ul className="space-y-4 mt-6">
            <li className="flex items-start gap-3">
              <MessageCircle className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
              <span>Social media algorithms designed to make teens feel inadequate.</span>
            </li>
            <li className="flex items-start gap-3">
              <Users className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
              <span>Influencers who profit from your child's insecurity.</span>
            </li>
            <li className="flex items-start gap-3">
              <Shield className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
              <span>Constant comparison with carefully edited lives online.</span>
            </li>
          </ul>
          <p className="mt-6 bg-red-50 p-4 rounded-lg border-l-4 border-red-500 text-red-800 font-medium">
            The result? Your teen's sense of self-worth is being shaped by people who don't love them, don't know them, and definitely don't care about their future.
          </p>
        </div>
      </section>

      {/* The Solution */}
      <section className="bg-teal-50 rounded-3xl p-8 md:p-12 mb-16">
        <h2 className="text-3xl font-bold text-teal-900 mb-6">Introducing: The Peer Pressure Vaccine</h2>
        <p className="text-lg text-teal-800 mb-8">
          The 5-Step System That Builds Unshakeable Confidence in Your Teen (Even If They Currently Ignore Everything You Say).
        </p>
        
        <h3 className="font-bold text-teal-900 text-xl mb-4">What You'll Discover:</h3>
        <div className="grid gap-6">
           <div className="flex gap-4">
             <div className="w-8 h-8 bg-teal-200 text-teal-800 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
             <p className="text-teal-800"><strong>5 Simple Steps</strong> to gently re-shape your teen’s confidence from the inside, without nagging.</p>
           </div>
           <div className="flex gap-4">
             <div className="w-8 h-8 bg-teal-200 text-teal-800 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
             <p className="text-teal-800"><strong>A 5-Day Affirmation Plan</strong> that fits right into your busy Nigerian life (less than 5 mins/day).</p>
           </div>
           <div className="flex gap-4">
             <div className="w-8 h-8 bg-teal-200 text-teal-800 rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
             <p className="text-teal-800"><strong>Identity-Shaping Statements</strong> your teen will start believing without feeling controlled.</p>
           </div>
        </div>
      </section>

      {/* Why It Works */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why This Works</h2>
        <p className="text-gray-600 mb-6 text-center max-w-2xl mx-auto">
          Maybe you've tried "serious talks", taking away phones, or threats. Here is why those failed: They focused on <span className="underline decoration-orange-400 decoration-2">control</span>.
        </p>
        <div className="bg-white border-l-4 border-teal-500 shadow-md p-6 rounded-r-lg">
          <p className="text-xl font-serif italic text-gray-800">
            "The Confidence to withstand negative peer pressure isn’t built by control; it’s built by connection."
          </p>
        </div>
        <p className="mt-6 text-gray-600">
          The Peer Pressure Vaccine uses the power of <strong>Identity Science</strong> and a deep understanding of Nigerian cultural values to help your teen hear you in a fresh, safe, loving way.
        </p>
      </section>

      {/* Testimonials */}
      <section className="mb-16 bg-orange-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-orange-900 mb-10">What Other Nigerian Parents Are Saying</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex gap-1 text-orange-400 mb-3"><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/></div>
              <p className="text-gray-600 mb-4 text-sm">"I was amazed at how quickly my 16-year-old daughter started opening up to me again. The techniques in this guide helped me rebuild our relationship."</p>
              <p className="font-bold text-gray-900 text-sm">- Mrs. Adebayo, Lagos</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex gap-1 text-orange-400 mb-3"><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/></div>
              <p className="text-gray-600 mb-4 text-sm">"My son went from spending all day on social media to actually asking for my advice about his future. This guide gave me my child back."</p>
              <p className="font-bold text-gray-900 text-sm">- Mr. Okafor, Abuja</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Author */}
      <section className="flex flex-col md:flex-row gap-8 items-center mb-16 border-b border-gray-200 pb-16">
        <div className="w-32 h-32 md:w-48 md:h-48 flex-shrink-0">
          <img 
              src="/assets/author.jpeg" 
              alt="Nikky Nzekwe" 
              className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg"
          />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Why Trust Me?</h3>
          <p className="text-gray-600 mb-4">
            My name is <strong>Nikky Nzekwe</strong>, a Certified Adolescent Coach with 12 years of experience. I founded Thrive Together Coaching Hub to help Nigerian parents build strong, emotionally connected relationships with their teenagers.
          </p>
          <p className="text-gray-600">
            I'm a Nigerian parent myself, so I understand your fears. I created this guide because I've seen too many families torn apart by the forces threatening yours right now.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Questions</h2>
        <div className="space-y-4">
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-bold text-gray-800 flex items-center gap-2"><HelpCircle className="w-4 h-4 text-teal-600"/> How long will it take to see results?</h4>
            <p className="text-gray-600 text-sm mt-2">Most parents report noticeable improvements in their teen's responsiveness within 7-14 days. Major changes typically occur within 30-60 days.</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-bold text-gray-800 flex items-center gap-2"><HelpCircle className="w-4 h-4 text-teal-600"/> What if I live outside Nigeria?</h4>
            <p className="text-gray-600 text-sm mt-2">This system has been successfully used by Nigerian families in the UK, US, Canada, and other countries. The cultural insights remain relevant.</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-bold text-gray-800 flex items-center gap-2"><HelpCircle className="w-4 h-4 text-teal-600"/> I'm a single parent. Will this work?</h4>
            <p className="text-gray-600 text-sm mt-2">Absolutely. Many of the families I work with are single-parent households. The principles remain the same.</p>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Don't Wait Until It's Too Late</h2>
        <p className="text-gray-300 mb-8 max-w-xl mx-auto">
          Your teen receives over 3,000 messages per day telling them who they should be. Ensure you are the strongest voice in that process.
        </p>
        <div className="max-w-md mx-auto bg-white p-6 rounded-xl text-left text-black">
           <LeadMagnetForm btnText="DOWNLOAD FREE COPY NOW" />
        </div>
      </div>

    </div>
  </div>
  <Footer/>
  </>
)};

export default LeadMagnetPage;