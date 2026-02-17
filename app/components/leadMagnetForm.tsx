'use client'

import { useState } from 'react';
import { CheckCircle, Shield } from 'lucide-react'; // assuming you're using lucide-react

type LeadMagnetFormProps = {
  title?: string;
  btnText?: string;
};

const statusMessages = {
  idle: 'Get My Free Ebook',
  loading: 'Sending...',
  success: 'Check your Inbox! ✅',
  error: 'Something went wrong. Try again?'
};

const LeadMagnetForm = ({ title, btnText }: LeadMagnetFormProps) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'|'error'>('idle');

  const handleSubmit = async(e: React.FormEvent) => {
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

  if (status === 'success') {
    return (
      <div className="bg-green-100 text-green-800 p-4 rounded-lg flex items-center gap-2 border border-green-200">
        <CheckCircle className="w-5 h-5" />
        <span>Success! Check your inbox for the guide.</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full">
      <h3 className="text-xl font-bold text-gray-900">{title || "Get Your Free Copy"}</h3>
      <input
        type="email"
        required
        placeholder="Enter your best email address"
        className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none w-full"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="bg-orange-600 text-white px-6 py-4 rounded-lg font-bold hover:bg-orange-700 transition shadow-md w-full uppercase tracking-wide text-sm"
      >
        {/* {status === 'loading' ? 'Sending...' : (btnText || 'YES! SEND ME THE FREE GUIDE')} */}
        {statusMessages[status as keyof typeof statusMessages]}
      </button>
      <p className="text-xs text-gray-500 flex items-center gap-1 justify-center mt-2">
        <Shield className="w-3 h-3" /> 100% Privacy Protected. Unsubscribe anytime.
      </p>
    </form>
  );
};

export default LeadMagnetForm;
