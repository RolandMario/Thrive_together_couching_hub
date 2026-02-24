'use client'
import React, { useState, useEffect } from 'react';
import { Menu, X, Heart, Users, BookOpen, Star, Mail, Phone, Calendar, ArrowRight, CheckCircle, Download } from 'lucide-react';
import Link from 'next/link';

import Image from 'next/image';


const statusMessages = {
  idle: 'Get My Free Ebook',
  loading: 'Sending...',
  success: 'Check your Inbox! ✅',
  error: 'Something went wrong. Try again?'
};


const PremiumBook = ()=>{
    return(
        <>
              <div className=" bg-indigo-300 border-l-4 border-teal-600 p-8 rounded-r-xl shadow-sm my-12">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">BREAKING THE PHONE ADDICTION"</h3>
          <p className="text-gray-600 mb-4">
           By Nkeiruka Jane Nzekwe
          </p>
          <Image
          src={"/assets/breaking_the_phone_addiction.jpeg"}
          alt='breaking the phone addiction'
          width={200}
          height={200}
          
          
          />
        </div>
        <div className="w-full md:w-auto">
        <Link href={'https://selar.com/46308qs247'} target='_blank' className=" mt-10 px-8 py-4 bg-teal-600 text-white rounded-full font-semibold hover:bg-teal-700 transition shadow-lg">
                BUY "Breaking the phone addiction"
          </Link>
        </div>
      </div>
    </div>
        </>
    )
}

export default PremiumBook;