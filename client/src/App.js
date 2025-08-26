import React, { useState } from 'react';
import { Mail, Lock, LogIn, Eye, EyeOff } from 'lucide-react'; // Importing Eye and EyeOff icons

// Main App component for the sign-in page
const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // New state for password visibility
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  // Toggles the visibility of the password field
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Handles the submission of the sign-in form
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Clear previous messages and errors
    setError('');
    setMessage('');

    // Basic validation
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    // Simulate an API call or authentication logic
    console.log('Attempting to sign in with:', { email, password });

    // Simulate a successful sign-in
    setMessage(`Successfully signed in as ${email}!`);
    setEmail(''); // Clear the email field
    setPassword(''); // Clear the password field
    setShowPassword(false); // Reset password visibility
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4 sm:p-6 lg:p-8 font-sans"> {/* Darker background */}
      <div className="bg-gray-800 p-8 rounded-lg shadow-xl w-full max-w-md border border-gray-700"> {/* Darker form container */}
        <h2 className="text-3xl font-bold text-center text-white mb-6">Sign In</h2> {/* White heading */}
        {error && (
          <div className="bg-red-700 border border-red-500 text-white px-4 py-3 rounded-md relative mb-4" role="alert">
            <strong className="font-bold">Error!</strong>
            <span className="block sm:inline ml-2">{error}</span>
          </div>
        )}
        {message && (
          <div className="bg-green-700 border border-green-500 text-white px-4 py-3 rounded-md relative mb-4" role="alert">
            <strong className="font-bold">Success!</strong>
            <span className="block sm:inline ml-2">{message}</span>
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2"> {/* Lighter label text */}
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
              <input
                type="email"
                id="email"
                className="pl-10 pr-4 py-2 w-full bg-gray-700 text-white border border-gray-600 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition duration-200 ease-in-out" /* Darker input, white text */
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-300 text-sm font-medium mb-2"> {/* Lighter label text */}
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
              <input
                type={showPassword ? 'text' : 'password'} // Dynamically change input type
                id="password"
                className="pl-10 pr-10 py-2 w-full bg-gray-700 text-white border border-gray-600 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition duration-200 ease-in-out" /* Darker input, white text */
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-300 focus:outline-none"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-200 ease-in-out flex items-center justify-center font-semibold"
          >
            <LogIn className="mr-2" size={20} />
            Sign In
          </button>
        </form>
        <p className="mt-6 text-center text-gray-400 text-sm"> {/* Lighter text for "Don't have an account" */}
          Don't have an account?{' '}
          <a href="#" className="text-indigo-500 hover:text-indigo-400 font-medium"> {/* Adjusted link color */}
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default App;
