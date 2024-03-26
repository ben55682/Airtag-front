import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your authentication logic here
    navigate('location')
    console.log('Logging in with:', { username, password });
  };

  return (
    <section className="relative isolate overflow-hidden bg-white px-6 sm:py-7 lg:px-8 h-full flex justify-center">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <form onSubmit={handleLogin} className="p-10 rounded-lg shadow-lg w-[20vw] h-[43vh] backdrop-filter backdrop-blur-sm bg-opacity-40 bg-secondary-100 self-center">
        <h2 className="text-accent-600 text-center text-2xl font-bold mb-6">Login</h2>
        <div className="relative mb-6">
          <input
            type="text"
            id="username"
            className="form-input w-full mt-1 px-4 py-3 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:text-primary-800 focus:border-red-500 peer"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label htmlFor="username" className="absolute text-lg text-accent-600 duration-300 transform translate-y-0 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" placeholder="">Username</label>
          <UserIcon className="h-5 w-5 absolute top-6 right-4 text-accent-600" />
        </div>
        <div className="relative mb-6">
          <input
            type="password"
            id="password"
            className="form-input w-full mt-1 px-4 py-3 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:text-primary-800 focus:border-red-500 peer"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label htmlFor="password" className="absolute text-lg text-accent-600 duration-300 transform translate-y-0 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" placeholder="">Password</label>
          <LockClosedIcon className="h-5 w-5 absolute top-6 right-4 text-accent-600" />
        </div>
        <button type="submit" className="bg-primary-800 text-accent-200 w-full py-3 rounded-md hover:bg-primary-700 focus:invalid:ring-red-500 focus:border-stone-800 shadow-md mt-10 duration-300">
          Login
        </button>
      </form>
    </section>
  );
};

export default Login;