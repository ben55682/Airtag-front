import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { UserIcon, LockClosedIcon, AtSymbolIcon } from '@heroicons/react/24/outline'
import axios from 'axios';

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    axios
      .post('https://tiny-bear-gear.cyclic.app/user/signUp', data)
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          // Registration successful, navigate to the admin page
          navigate('/login');
        } else {
          console.error('Registration failed:', response.statusText);
        }
      })
      .catch((error) => {
        console.error('Error during registration:', error);
      });
  };

  const click = () => {
    navigate('/login')
  }

  const passwordRef = register('password', { required: true, minLength: 6 });
  const confirmPasswordRef = register('confirmPassword', {
    required: true,
    validate: (value) => value === getValues('password'),
  });
  const usernameRef = register('username', { required: true, minLength: 4 });
  const emailRef = register('email', {
    required: true,
    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  });

  return (
    <section className="relative isolate overflow-hidden bg-white px-6 sm:py-7 lg:px-8 h-full flex justify-center">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <form onSubmit={handleSubmit(onSubmit)} className="w-[30vw] h-[70vh] p-4 bg-background-100 rounded-lg shadow-md self-center">
        <h2 className="text-accent-600 text-bold text-center  mb-4 text-2xl">Make your own elections</h2>

        <div className="relative mb-6"> 
          <input {...usernameRef} type="text" className="form-input w-full mt-1 px-4 py-3 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:text-primary-800 focus:border-red-500 peer" />
          {errors.username && (
            <div className="text-red-500">* Enter valid username: min 4 chars</div>
          )}
          <label className="absolute text-lg text-accent-600 duration-300 transform translate-y-0 scale-75 top-3 -z-7 origin-[0] peer-focus:left-0 peer-focus:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" placeholder="">Username</label>
          <UserIcon className="h-5 w-5 absolute top-6 right-4 text-accent-600" />
        </div>
        
        <div className="relative mb-6">
          <input {...passwordRef} type="password" className="form-input w-full mt-1 px-4 py-3 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:text-primary-800 focus:border-red-500 peer" />
          {errors.password && (
            <div className="text-red-500">* Enter valid password: min 6 chars</div>
          )}
          <label className="absolute text-lg text-accent-600 duration-300 transform translate-y-0 scale-75 top-3 -z-7 origin-[0] peer-focus:left-0 peer-focus:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" placeholder="">Password</label>
          <LockClosedIcon className="h-5 w-5 absolute top-6 right-4 text-accent-600" />      
        </div>

        <div className="relative mb-6">
          <input {...confirmPasswordRef} type="password" className="form-input w-full mt-1 px-4 py-3 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:text-primary-800 focus:border-red-500 peer" />
          {errors.confirmPassword && (
            <div className="text-red-500">* Passwords do not match</div>
          )}
          <label className="absolute text-lg text-accent-600 duration-300 transform translate-y-0 scale-75 top-3 -z-7 origin-[0] peer-focus:left-0 peer-focus:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" placeholder="">Confirm Password</label>
          <LockClosedIcon className="h-5 w-5 absolute top-6 right-4 text-accent-600" />        
        </div>

        <div className="relative mb-6">
          <input {...emailRef} type="email" className="form-input w-full mt-1 px-4 py-3 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:text-primary-800 focus:border-red-500 peer" />
          {errors.email && <div className="text-red-500">* Enter valid Email</div>}
          <label className="absolute text-lg text-accent-600 duration-300 transform translate-y-0 scale-75 top-3 -z-7 origin-[0] peer-focus:left-0 peer-focus:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" placeholder="">Email</label>
          <AtSymbolIcon className="h-5 w-5 absolute top-6 right-4 text-accent-600" /> 
        </div>

        <label className="block mt-4 text-accent-600">
          Already have an account?
          <h4 className="underline text-stone-700 cursor-pointer" onClick={click}>CLICK HERE</h4>
        </label>
        
        <button type="submit" className="bg-primary-800 text-accent-200 w-full py-3 rounded-md hover:bg-primary-700 duration-300 focus:invalid:ring-red-500 focus:border-stone-800 shadow-md mt-10">
          Register
        </button>
      </form>
    </section>
  );
}
