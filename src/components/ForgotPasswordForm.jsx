import React, { useState } from 'react';
import forgotPasswordImage from '../assets/login-illustration_Copy.jpg'; // You'll need to add this image

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Password reset request for:', email);
    // Here you would typically make an API call to send the reset email
    setIsSubmitted(true);
  };

  const handleBackToLogin = () => {
    // This would typically use React Router's navigate function
    console.log('Navigate back to login');
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md text-center">
          <div className="mb-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Check your email</h1>
            <p className="text-gray-600 text-sm">
              We've sent password reset instructions to {email}
            </p>
          </div>
          
          <button
            onClick={handleBackToLogin}
            className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 transition-colors font-medium text-sm"
          >
            Back to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden w-full max-w-6xl min-h-[600px] flex flex-col lg:flex-row">
        
        {/* Left side - Image */}
        <div className="hidden lg:flex lg:w-1/2 bg-gray-50 flex-col items-center justify-center p-8">
          <div className="w-full h-full flex items-center justify-center">
            {/* Illustration matching the design */}
            <div className="relative w-80 h-80">
              {/* Building/School illustration */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                <div className="w-48 h-32 bg-gray-200 rounded-lg relative">
                  {/* Windows */}
                  <div className="absolute top-4 left-4 w-4 h-4 bg-gray-300 rounded"></div>
                  <div className="absolute top-4 right-4 w-4 h-4 bg-gray-300 rounded"></div>
                  <div className="absolute bottom-4 left-4 w-4 h-4 bg-gray-300 rounded"></div>
                  <div className="absolute bottom-4 right-4 w-4 h-4 bg-gray-300 rounded"></div>
                  
                  {/* Columns */}
                  <div className="absolute top-0 left-8 w-2 h-full bg-gray-300"></div>
                  <div className="absolute top-0 right-8 w-2 h-full bg-gray-300"></div>
                </div>
              </div>
              
              {/* Graduation cap */}
              <div className="absolute top-8 right-12">
                <div className="w-16 h-12 bg-indigo-600 rounded-lg transform -rotate-12 relative">
                  <div className="absolute top-0 right-0 w-3 h-3 bg-yellow-400 rounded-full transform translate-x-1 -translate-y-1"></div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute top-16 left-8 w-8 h-8 bg-purple-400 rounded-full opacity-80"></div>
              <div className="absolute top-24 left-16 w-6 h-6 bg-orange-400 rounded-full opacity-80"></div>
              <div className="absolute bottom-32 right-8 w-10 h-10 bg-pink-400 rounded-full opacity-80"></div>
              
              {/* Student character */}
              <div className="absolute bottom-16 left-8">
                <div className="w-12 h-12 bg-purple-500 rounded-full relative">
                  {/* Hair */}
                  <div className="absolute -top-2 left-1 w-10 h-8 bg-amber-600 rounded-full"></div>
                  {/* Body */}
                  <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-8 h-12 bg-purple-600 rounded-lg"></div>
                  {/* Book */}
                  <div className="absolute top-6 right-0 w-4 h-3 bg-gray-700 rounded transform rotate-12"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Forgot Password Form */}
        <div className="w-full lg:w-1/2 p-6 lg:p-12 flex flex-col justify-center bg-white">
          <div className="max-w-sm mx-auto w-full">
            
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2 leading-relaxed">
                Forgot your password?
              </h1>
              <p className="text-gray-600 text-sm">
                Enter your registered email to reset your password
              </p>
            </div>

            {/* Forgot Password Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Input */}
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all text-gray-900 placeholder-gray-500 text-sm"
                  required
                />
              </div>

              {/* Reset Password Button */}
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 transition-colors font-medium text-sm"
              >
                Request password reset
              </button>
            </form>

            {/* Back to Login Link */}
            <div className="mt-6 text-center">
              <button 
                onClick={handleBackToLogin}
                className="text-indigo-600 hover:text-indigo-800 font-medium transition-colors text-sm"
              >
                Back to Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;