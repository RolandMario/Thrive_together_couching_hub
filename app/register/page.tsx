'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navigation from '../components/navigation';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    parentName: '',
    phone: '',
    email: '',
    school: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Format message for WhatsApp
    const message = `*New Bootcamp Registration*%0A%0A` +
      `*Daughter's Full Name:* ${formData.fullName}%0A` +
      `*Age:* ${formData.age}%0A` +
      `*Parent/Guardian Name:* ${formData.parentName}%0A` +
      `*Phone Number:* ${formData.phone}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*School:* ${formData.school || 'Not provided'}%0A%0A` +
      `Registration Fee: ₦45,000%0A` +
      `Please confirm receipt. Thank you!`;

    const phoneNumber = "2347068497568"; // 08037476431 in international format

    // Open WhatsApp with pre-filled message
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');

    // Optional: Show success message
    alert("Registration details sent to WhatsApp! Please send your payment proof after chatting.");

    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-zinc-50">
    <Navigation/>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold tracking-tighter mb-4">Secure Your Spot</h1>
          <p className="text-xl text-zinc-600">
            Identity, Influence & Purpose Bootcamp 2026<br />
            26th – 28th August, 2026 | Enugu
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-10">
          {/* Form */}
          <div className="md:col-span-3">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-3xl shadow-sm">
              <h2 className="text-2xl font-semibold mb-6">Participant Information</h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Daughter's Full Name <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-teal-600"
                    placeholder="Enter full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Age <span className="text-red-500">*</span></label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    required
                    min="12"
                    max="17"
                    className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-teal-600"
                    placeholder="13"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Parent/Guardian Full Name <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-teal-600"
                    placeholder="Enter parent name"
                  />
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number <span className="text-red-500">*</span></label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-teal-600"
                      placeholder="080xxxxxxxxx"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address <span className="text-red-500">*</span></label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-teal-600"
                      placeholder="parent@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">School (Optional)</label>
                  <input
                    type="text"
                    name="school"
                    value={formData.school}
                    onChange={handleChange}
                    className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-teal-600"
                    placeholder="School name"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-10 w-full py-5 bg-teal-600 hover:bg-teal-700 disabled:bg-teal-400 text-white rounded-2xl font-semibold text-lg transition"
              >
                {isSubmitting ? "Opening WhatsApp..." : "Submit & Send to WhatsApp"}
              </button>
            </form>
          </div>

          {/* Payment Sidebar */}
          <div className="md:col-span-2">
            <div className="bg-white p-8 rounded-3xl shadow-sm sticky top-8">
              <h3 className="text-xl font-semibold mb-6">Payment Information</h3>
              
              <div className="space-y-6">
                <div>
                  <p className="font-medium text-zinc-700 mb-3">Registration Fee</p>
                  <p className="text-4xl font-bold text-teal-600">₦45,000</p>
                </div>

                <div className="border-t pt-6">
                  <p className="font-medium mb-4">Bank Transfer Details</p>
                  <div className="space-y-4 text-sm">
                    <div>
                      <p className="text-zinc-500">Bank Name</p>
                      <p className="font-medium">Zenith Bank</p>
                    </div>
                    <div>
                      <p className="text-zinc-500">Account Number</p>
                      <p className="font-medium">1014937364</p>
                    </div>
                    <div>
                      <p className="text-zinc-500">Account Name</p>
                      <p className="font-medium">Girl-Woman Initiative for Sustainability and Education</p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 p-5 rounded-2xl text-sm">
                  <p className="font-medium text-green-800">After Payment:</p>
                  <p className="mt-2 text-green-700">
                    Send proof of payment via WhatsApp to <strong>0803 747 6431</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}