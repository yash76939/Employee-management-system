import React, { useState } from 'react';

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password); // Corrected function call
    setEmail('');
    setPassword('');
  };

  return (
    <div className='flex h-screen w-screen items-center justify-center bg-gray-900 '>
      <div className='border-2 border-emerald-600 py-10 px-12 rounded-xl shadow-lg bg-gray-800'>
        <form onSubmit={submitHandler} className='flex flex-col items-center space-y-4'>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            type='email'
            placeholder='Enter your email'
            className='outline-none text-white bg-transparent border-2 border-emerald-600 py-3 px-5 rounded-full'
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            type='password'
            placeholder='Enter your password'
            className='mt-2 outline-none text-white bg-transparent border-2 border-emerald-600 py-3 px-5 rounded-full'
          />
          <button type='submit' className='text-white outline-none mt-4 border-none font-bold bg-emerald-600 py-2 px-10 rounded-full hover:bg-emerald-500'>
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
