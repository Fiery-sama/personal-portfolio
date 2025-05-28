"use client";

import React, { useState } from 'react';

export const Contact = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<{ email?: string; subject?: string; message?: string }>({});
  const [success, setSuccess] = useState(false);

  const validateForm = () => {
    const newErrors: typeof errors = {};
    if (!email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Email is invalid';

    if (!subject) newErrors.subject = 'Subject is required';
    if (!message) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setSuccess(true);
      setEmail('');
      setSubject('');
      setMessage('');
      setErrors({});
    }
  };

  return (
    <div className="container mx-auto text-center px-16 py-4" id="contact">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="text-5xl py-10 text-red-600 font-bold" id="projects">Contact</h2>

        {success && (
          <div className="mb-4 text-green-600 font-medium">
            ✅ Message validated and form cleared!
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium">Your email</label>
            <input
              type="email"
              id="email"
              className="shadow-sm border text-sm rounded-lg block w-full p-2.5"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="subject" className="block mb-2 text-sm font-medium">Subject</label>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-sm rounded-lg border shadow-sm"
              placeholder="Let me know how I can help you"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            {errors.subject && <p className="text-sm text-red-500 mt-1">{errors.subject}</p>}
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block mb-2 text-sm font-medium">Your message</label>
            <textarea
              id="message"
              rows={6}
              className="block p-2.5 w-full text-sm rounded-lg shadow-sm border"
              placeholder="Leave a comment..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            {errors.message && <p className="text-sm text-red-500 mt-1">{errors.message}</p>}
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-red-700 sm:w-fit hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300"
          >
            Send message
          </button>
        </form>
      </div>
    </div>
  );
};
