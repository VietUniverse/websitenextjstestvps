import React, { useEffect } from 'react';

// In a real React application, you would typically add these links
// to your main public/index.html file or manage them with a package like 'react-helmet'.
const HeadLinks = () => (
  <>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&family=Playfair+Display:wght@400;500;600;700&display=swap"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
    />
    {/* Tailwind CSS is assumed to be set up globally in a React project, 
        often through a postcss configuration. The script tag is not the standard way in React.
        <script src="https://cdn.tailwindcss.com"></script> 
    */}
  </>
);

// The CSS from the <style> tag is now placed here.
// In React, this can be done with styled-components, CSS-in-JS libraries, or global CSS files.
// For self-containment, we'll inject it with a <style> tag in the component.
const GlobalStyles = () => (
  <style>{`
    :root {
        --font-serif: 'Playfair Display', serif;
        --font-sans: 'Inter', sans-serif;
        --color-primary: #1A1A1A; /* Charcoal Black */
        --color-secondary: #F8F7F4; /* Off-White */
        --color-accent: #004D40; /* Deep Teal */
    }
    body { 
        font-family: var(--font-sans); 
        background-color: var(--color-secondary); 
        color: var(--color-primary); 
    }
    h1, .font-serif { 
        font-family: var(--font-serif); 
        font-weight: 600; 
    }
    .btn { 
        display: inline-block; 
        padding: 0.75rem 2rem; 
        border: 1px solid var(--color-primary); 
        text-transform: uppercase; 
        font-size: 0.875rem; 
        font-weight: 500; 
        letter-spacing: 0.05em; 
        transition: all 0.3s ease; 
        cursor: pointer;
    }
    .btn-primary { 
        background-color: var(--color-primary); 
        color: var(--color-secondary); 
    }
    .btn-primary:hover { 
        background-color: transparent; 
        color: var(--color-primary); 
    }
  `}</style>
);


function CreateAccountPage() {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Handle account creation logic here
    console.log('Form submitted!');
  };

  return (
    <div className="antialiased">
      {/* These would typically be in the <head> of your document */}
      <HeadLinks /> 
      <GlobalStyles />

      <header className="w-full py-6 px-4 md:px-8">
        <div className="container mx-auto flex justify-center items-center">
          <a href="/" className="font-serif text-3xl tracking-widest">
            AURA
          </a>
        </div>
      </header>

      <main
        className="container mx-auto px-4 py-16 flex items-center justify-center"
        style={{ minHeight: 'calc(100vh - 200px)' }}
      >
        <div className="w-full max-w-lg bg-white p-8 md:p-12 shadow-sm rounded-lg">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl">Create an Account</h1>
            <p className="mt-3 text-gray-600">Join the AURA community.</p>
          </div>
          <form onSubmit={handleFormSubmit} className="mt-8 space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 block w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent rounded-md"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent rounded-md"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                className="mt-1 block w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent rounded-md"
              />
            </div>
            <div>
              <button type="submit" className="w-full btn btn-primary py-3 rounded-md">
                Create Account
              </button>
            </div>
          </form>
          <p className="text-center text-sm text-gray-600 mt-8">
            Already have an account?{' '}
            <a href="/signin" className="font-medium text-accent hover:underline">
              Sign in
            </a>
          </p>
        </div>
      </main>

      <footer className="bg-primary text-secondary">
        <div className="container mx-auto px-4 md:px-8 py-8">
          <div className="pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
            <p>
              &copy; {new Date().getFullYear()} AURA. All Rights Reserved. A
              project by Le Duy Viet.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default CreateAccountPage;

