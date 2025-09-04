// src/pages/LoginPage.jsx
import React from 'react';
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
  const handleLoginSubmit = ({ email, password }) => {
    // For now, log the form data to the console
    console.log('Form submitted with:', { email, password });

    // You can later connect this to your authentication API
  };

 return (
  <div className="min-h-screen w-full bg-gray-100 flex items-center justify-center p-0">
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <h3 className="text-3xl font-semibold text-center mb-6">Login</h3>
      <LoginForm onSubmit={handleLoginSubmit} />
    </div>
  </div>
);
};

export default LoginPage;
