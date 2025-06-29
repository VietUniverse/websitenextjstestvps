"use client";

import React from 'react';
import Link from 'next/link';

function MinimalHeader() {
  return (
    <header className="w-full py-6 px-4 md:px-8">
      <div className="container mx-auto flex justify-center items-center">
        <Link href="/" className="font-serif text-3xl tracking-widest">
          AURA
        </Link>
      </div>
    </header>
  );
}

function MinimalFooter() {
  return (
     <footer className="bg-primary text-secondary">
        <div className="container mx-auto px-4 md:px-8 py-8">
          <div className="pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
            <p>
              &copy; {new Date().getFullYear()} AURA. All Rights Reserved. A project by Le Duy Viet.
            </p>
          </div>
        </div>
      </footer>
  );
}

export default function SignInPage() {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log('Sign in form submitted!');
    alert('Chức năng đăng nhập chưa được cài đặt.');
  };

  return (
    <div className="flex flex-col min-h-screen bg-secondary">
      <MinimalHeader />
      <main 
        className="flex-grow container mx-auto px-4 py-16 flex items-center justify-center"
        style={{ minHeight: 'calc(100vh - 200px)' }}
      >
        <div className="w-full max-w-lg bg-white p-8 md:p-12 shadow-sm rounded-lg">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl">Chào mừng trở lại</h1>
            <p className="mt-3 text-gray-600">Đăng nhập vào tài khoản của bạn.</p>
          </div>
          <form onSubmit={handleFormSubmit} className="mt-8 space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Địa chỉ Email</label>
              <input type="email" id="email" name="email" required className="mt-1 block w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent rounded-md" />
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Mật khẩu</label>
                <Link href="/forgot-password" className="text-sm font-medium text-accent hover:underline">Quên mật khẩu?</Link>
              </div>
              <input type="password" id="password" name="password" required className="mt-1 block w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent rounded-md" />
            </div>
            <div>
              <button type="submit" className="w-full btn btn-primary py-3 rounded-md">
                Đăng nhập
              </button>
            </div>
          </form>
          <p className="text-center text-sm text-gray-600 mt-8">
            Chưa có tài khoản AURA? <Link href="/register" className="font-medium text-accent hover:underline">Tạo tài khoản</Link>
          </p>
        </div>
      </main>
      <MinimalFooter />
    </div>
  );
}
