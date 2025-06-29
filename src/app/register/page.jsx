

"use client";

import Link from 'next/link';
import { useState } from 'react';




export default function RegisterPage() {
  // Sử dụng state để quản lý dữ liệu form (ví dụ)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Logic xử lý việc tạo tài khoản ở đây
    console.log('Form submitted with data:', formData);
    alert('Account creation functionality is not implemented yet.');
  };

  return (
    <div className="flex flex-col min-h-screen">

      <main className="flex-grow container mx-auto px-4 py-16 flex items-center justify-center">
        <div className="w-full max-w-lg bg-white p-8 md:p-12 shadow-sm rounded-lg">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl">Create an Account</h1>
            <p className="mt-3 text-gray-600">Join the AURA community.</p>
          </div>
          <form onSubmit={handleFormSubmit} className="mt-8 space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                onChange={handleInputChange}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent rounded-md"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                onChange={handleInputChange}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent rounded-md"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                required
                onChange={handleInputChange}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent rounded-md"
              />
            </div>
            <div>
              <button type="submit" className="w-full btn btn-primary py-3">
                Create Account
              </button>
            </div>
          </form>
          <p className="text-center text-sm text-gray-600 mt-8">
            Already have an account? <Link href="/signin" className="font-medium text-accent hover:underline">Sign in</Link>
          </p>
        </div>
      </main>

    </div>
  );
}

